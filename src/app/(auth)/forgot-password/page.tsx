
"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative mt-[-88px] md:mt-[-121px] pb-[40px] md:pb-0">
        <div className="login-bg"></div>
      <div className="flex md:w-[50%] flex-col justify-center  px-[16px] pt-[110px] md:py-[130px] relative z-[1]">
        <div className="flex flex-col justify-center  md:p-[40px] rounded-t-[12px] md:rounded-[30px] max-w-[460px] m-auto w-full">
        <div className="text-white mb-[40px] md:mb-[50px] flex flex-col gap-[15px]">
          <h2>Forgot Password?</h2>
          <span className="text-[18px]">
             Enter your email. We will email intructions on how to reset your password.
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-5 max-w-[360px] w-full"
        >
          <div className="w-full">
            <label className="block mb-[8] font-medium text-white">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        
          <Button
            type="submit"
            className="common-button button-gradient w-full !py-[8px] !text-[18px] !mt-[55px]"
          >
            Submit
          </Button>
          <Link href="/sign-in" className="flex items-center justify-center gap-[8px] w-full text-white border-[0] rounded-[30px] text-[18px] font-medium p-[9.5px] " >
          Back to Sign In
            </Link>
        </form>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] px-[16px] mt-[40px] md:mt-[40px] md:px-0">
              <Image
                src="/assets/unsplash.png"
                alt="unsplash"
                layout="intrinsic"
                width={680}
                height={1024}
                className="!w-full md:!w-[50%]  md:absolute md:!h-[100%] top-0 right-0 object-cover object-center rounded-b-[12px] md:rounded-b-[0]"
              />
            </div>
    </div>
  );
};

export default Page;
