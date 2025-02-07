"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Resend email link submitted");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative mt-[-88px] md:mt-[-121px] pb-[40px] md:pb-0">
      <div className="login-bg"></div>

      {/* Left Side - Content */}
      <div className="flex md:w-[50%] flex-col justify-center px-[16px] pt-[110px] md:py-[130px] relative z-[1]">
        <div className="flex flex-col justify-center md:p-[40px] rounded-t-[12px] md:rounded-[30px] max-w-[460px] m-auto w-full">
          <div className="text-white mb-[40px] md:mb-[50px] flex flex-col gap-[15px]">
            <h2>Link has been sent</h2>
            <span className="text-[18px]">
              A link to reset your password has been sent to your email.
            </span>
          </div>

          <Image
            src="/assets/resend-link.png"
            alt="resend-link"
            width={260}
            height={228}
          />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-5 max-w-[360px] w-full"
          >
            <Button
              type="submit"
              className="common-button button-gradient w-full !py-[8px] !text-[18px] !mt-[55px]"
            >
              Resend email link
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center md:w-[50%] px-[16px] md:px-0 mt-[40px] md:mt-[40px]">
        <Image
          src="/assets/unsplash.png"
          alt="unsplash"
          width={680}
          height={1024}
          className="w-full md:w-[50%] md:absolute md:h-full top-0 right-0 object-cover object-center rounded-b-[12px] md:rounded-b-[0]"
        />
      </div>
    </div>
  );
};

export default Page;
