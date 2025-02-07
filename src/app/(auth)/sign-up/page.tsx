"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { GoogleLogin } from "@/lib/svg";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
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
      <div className="flex md:w-[50%] flex-col justify-center px-[16px] pt-[110px] md:py-[130px] relative z-[1]">
        <div className="flex flex-col justify-center bg-[#1D2125] px-[16px] pb-[40px] py-[24px] md:p-[40px] rounded-t-[12px] md:rounded-[30px] max-w-[460px] m-auto w-full">
          <div className="text-white mb-[40px] md:mb-[50px] flex flex-col gap-[15px]">
            <h2>Sign In</h2>
            <span className="text-[18px]">
            Already have an account? {" "}
               <Link href="/sign-in" className="gradient-text text-[16px]">
                 Log In
              </Link>
            </span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-5 max-w-[360px] w-full"
          >
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
                First Name
              </label>
              <Input
                name="firstname"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
                Last Name
              </label>
              <Input
                name="lastname"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
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
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
                Phone Number
              </label>
              <Input
                name="phonenumber"
                type="text"
                placeholder="Enter your phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
                Password
              </label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <label className="block mb-[8px] font-medium text-white">
                Confirm Password
              </label>
              <Input
                name="confirmpassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmpassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              className="common-button button-gradient w-full !py-[8px] !text-[18px] !mt-[55px]"
            >
              Sign Up
            </Button>
            <span className="text-white">or</span>
            <Button className="flex items-center gap-[8px] w-full text-white border-[1px] border-[#fff] border-solid rounded-[30px] text-[18px] font-medium p-[9.5px] ">
              Sign in with Google <GoogleLogin />
            </Button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] px-[16px] md:px-0">
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
