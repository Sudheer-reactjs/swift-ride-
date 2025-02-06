"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ fullName: "", telephone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  return (
    <section className="w-full pt-[60px] lg:pt-[100px] relative z-[1]">
      <div className="container">
        <div className="bg-charcoalColor rounded-[14px] md:rounded-[30px] relative z-[1] p-[24px] pb-0 md:px-[30px] lg:px-[48px] md:md:py-[40px]">
          <div className="join-shape-before !top-[-40px] md:!top-[-100px]"></div>
          <div className="flex flex-col md:flex-row gap-[24px] relative z-[1]">
            <div className="w-full md:w-[50%] lg:md:w-[40%] text-left md:text-left">
              <h6 className="text-lightGreen text-[14px] md:text-[18px] font-normal mb-[10px] md:font-semibold">
                Always here to help
              </h6>
              <h2 className="h1 !text-[24px] md:!text-[48px] mb-[20px]">
                Any
                <span className="text-[#57E667]"> Questions? </span>
              </h2>
              <p className="large-text max-w-[410px] w-full">
                Your questions matter to us. Feel free to reach out with any
                questions or concerns using the form below.
              </p>
              <p className="large-text max-w-[410px] w-full mt-[25px]">
                Our dedicated support team is here to assist you swiftly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center space-y-[40px] max-w-[380px] w-full mt-[40px] "
              >
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
               <Input
                  name="telephone"
                  type="tel"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
                <Textarea placeholder="Message" />
                <Button
                  type="submit"
                  className="common-button button-gradient !w-full mt-[10px]  md:mt-[20px] "
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="w-full  md:w-[50%] lg:w-[60%] flex justify-center">
              <Image
                src="/assets/contact-image.png"
                alt="contact-image"
                layout="intrinsic"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
