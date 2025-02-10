"use client";

import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef<SignatureCanvas | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [, setIsScrolledToBottom] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [message, setMessage] = useState("Please read to the bottom and sign");

  useEffect(() => {
    // Listen for messages from the iframe
    const handleMessage = (event: MessageEvent) => {
      // Make sure the message is from your S3 domain
      if (event.origin === "https://swiftridetermsandconditions.s3.us-east-2.amazonaws.com") {
        if (event.data.type === "scroll") {
          const { scrollTop, scrollHeight, clientHeight } = event.data;
          // Consider scrolled to bottom if within 50px of the bottom
          const isBottom = scrollHeight - (scrollTop + clientHeight) < 50;
          setIsScrolledToBottom(isBottom);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Add scroll tracking script to iframe
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = () => {
        // Inject scroll tracking script into iframe
        try {
          const script = `
            window.addEventListener('scroll', function() {
              const scrollData = {
                type: 'scroll',
                scrollTop: window.scrollY,
                scrollHeight: document.documentElement.scrollHeight,
                clientHeight: window.innerHeight
              };
              window.parent.postMessage(scrollData, '*');
            });
          `;

          // Create a blob URL for the script
          const blob = new Blob([script], { type: 'text/html' });
          const scriptUrl = URL.createObjectURL(blob);

          // Create a new script element in the iframe
          const scriptElement = document.createElement('script');
          scriptElement.src = scriptUrl;
          
          // Append the script to the iframe's head
          iframe.contentDocument?.head.appendChild(scriptElement);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          console.log("Cannot inject script due to cross-origin restrictions");
          // Fall back to assuming document is read
          setIsScrolledToBottom(true);
        }
      };
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setIsSigned(false);
      setMessage("Please read to the bottom and sign");
    }
  };

  const handleSignatureChange = () => {
    if (sigCanvas.current) {
      setIsSigned(!sigCanvas.current.isEmpty());
    }
  };

  const saveSignature = () => {
    // Since we can't reliably track scroll in cross-origin iframe,
    // we'll focus mainly on signature validation
    if (!isSigned) {
      setMessage("Please provide your signature");
      return;
    }

    if (sigCanvas.current) {
      const signatureData = sigCanvas.current.toDataURL("image/png");
      
      // Store signature data
      try {
        localStorage.setItem("userSignature", signatureData);
        localStorage.setItem("signatureTimestamp", new Date().toISOString());
        setMessage("Signature saved successfully!");
        
        // You can add additional success handling here
        // For example, redirecting to another page:
        // window.location.href = '/success';
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setMessage("Failed to save signature. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-[30px] md:mb-[48px] w-full">
        <iframe
          ref={iframeRef}
          src="https://swiftridetermsandconditions.s3.us-east-2.amazonaws.com/SwiftRideTermsAndConditions.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Credential=AKIAUFOEWPJ2TZIQZKSM%2F20250210%2Fus-east-2%2Fs3%2Faws4_request&amp;X-Amz-Date=20250210T035329Z&amp;X-Amz-Expires=300&amp;X-Amz-Signature=924c95b86ff94c4747c73c986021c5bc76b066a04482f7cfb59cd1b0220b332a&amp;X-Amz-SignedHeaders=host&amp;x-amz-checksum-mode=ENABLED&amp;x-id=GetObject"
          className="document-viewer w-full h-[500px] overflow-auto"
          sandbox="allow-same-origin allow-scripts"
        />
      </div>
      
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        onEnd={handleSignatureChange}
        canvasProps={{
          width: 600,
          height: 150,
          className: "border bg-white rounded-[14px] w-full max-w-[600px]",
        }}
      />

      <div className="reminder-container pt-[16px]">
        <p className={`signature-reminder ${
          message === "Signature saved successfully!" 
            ? "text-green-500" 
            : "text-[#FF5D5D]"
        }`}>
          {message}
        </p>
      </div>
      
      <div className="flex gap-[24px] md:gap-[40px] !mt-[20px] md:!mt-[30px] w-full md:w-auto flex-col md:flex-row">
        <Button
          onClick={clearSignature}
          className="common-button w-full !py-[8px] !text-[18px] !text-[#fff] !border-[1px] !border-[#fff] !border-solid rounded-[30px] order-2"
        >
          Clear Signature
        </Button>
        <Button
          onClick={saveSignature}
          className="common-button button-gradient w-full !py-[8px] !text-[18px] order-1 md:order-last"
        >
          Submit Signature
        </Button>
      </div>
    </div>
  );
};

export default SignaturePad;