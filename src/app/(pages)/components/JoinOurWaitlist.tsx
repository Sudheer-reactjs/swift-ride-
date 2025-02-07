"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react"; 

const JoinOurWaitlist = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <section className="w-full pt-[60px] lg:pt-[100px] relative">
      <div className="container">
        <div className="bg-charcoalColor rounded-[14px] md:rounded-[30px] relative z-[1] p-[24px] md:px-[32px] md:md:py-[50px] lg:py-[80px]">
          <div className="join-shape-before"></div>
          <div className="join-shape-after hidden md:block"></div>
          <div className="flex flex-col gap-[20px] md:gap-[32px] text-center relative z-[1]">
            <h2 className="h1 !text-[24px] md:!text-[48px]">
            Want to <span className="text-[#57E667]">subscribe  </span> to other plans?
            </h2>
            <p className="large-text max-w-[730px] w-full m-auto">
            While our cars are currently available, we recommend joining our waitlist to secure your rental as our fleet is limited. Sign up now, and we&apos;ll notify you as soon as your preferred vehicle becomes available!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-[40px] md:space-y-[50px] max-w-[360px] w-full m-auto mt-[20px] md:mt-[4px]"
            >
              <Input
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                className="common-button button-gradient !w-full mt-[10px]  md:mt-[20px] "
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurWaitlist;
