"use client";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef<SignatureCanvas | null>(null);

  const clearSignature = () => {
    sigCanvas.current?.clear();
  };

  const saveSignature = () => {
    if (sigCanvas.current) {
      const signatureData = sigCanvas.current.toDataURL("image/png");
      console.log("Saved Signature:", signatureData);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 ">
       
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 600,
          height: 150,
          className: "border bg-white rounded-[14px]",
        }}
      />
      <div className="reminder-container">
                    <p className="signature-reminder text-[#FF5D5D]" >
                    Please read to the bottom and sign
                    </p>
                </div>
      <div className="flex gap-[40px] !mt-[30px] ">
        <Button 
        onClick={clearSignature}
          className="common-button w-full !py-[8px] !text-[18px]  !text-[#fff] !border-[1px] !border-[#fff] !border-solid rounded-[30px]"
        >
         Clear Signature
        </Button>
        <Button 
          onClick={saveSignature}
          className="common-button button-gradient w-full !py-[8px] !text-[18px]"
        >
         Submit Signature  
        </Button>
      </div> 
    </div>
  );
};

export default SignaturePad;
