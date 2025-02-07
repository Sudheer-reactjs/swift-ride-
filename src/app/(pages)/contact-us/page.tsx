import React from "react";
import Image from "next/image";
import SocialMedia from "@/components/SocialMedia";
import { EmailIcon, LocationIcon } from "@/lib/svg";
import FaqSection from "../components/FaqSection";
import ContactForm from "../components/ContactForm";
const Page = () => {
  return (
    <div>
      <section className="inline-block w-full relative mb-0 my-[28px] md:my-[60px] lg:my-[100px] ">
        <div className="container">
          <div className="grid md:grid-cols-2 justify-center items-center  ">
            <div className="md:pb-[30px] lg:py-[30px] flex flex-col gap-[24px]">
              <h6 className="text-lightGreen text-[14px] md:text-[18px] font-normal md:font-semibold">
                Welcome to Swift Ride
              </h6>
              <h1 className="max-w-[500px] w-full mt-[-10px]">
                How Can We
                <span className="gradient-text"> Help</span>?
              </h1>
              <p className="large-text max-w-[560px] w-full">
                Explore a range of resources and contact options tailored to
                address your needs. Whether you have questions, require
                assistance, or seek information, we&apos;re here to provide the
                support you deserve.
              </p>
              <ul className="contact-icon flex flex-col gap-[15px] text-[18px] lg:mt-[35px] lg:mb-[5px]">
                <li>
                  <a href="mailto:info@swiftride.net">
                    <EmailIcon />
                    info@swiftride.net
                  </a>
                </li>
                <li>
                  <LocationIcon /> Atlanta, Georgia
                </li>
              </ul>
              <div className="contact-socail">
                <SocialMedia />
              </div>
            </div>
            <div className="">
              <Image
                src="/assets/contact-car.png"
                alt="contact-car"
                width={784}
                height={675}
                className="object-contain relative right-[-16px] lg:absolute lg:right-0 z-[3] lg:max-w-[55%] top-0"
              />
              <div className="box-shadow1 z-[1]"></div>
              <div className="box-shadow2 z-[1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      <FaqSection />
      <ContactForm />
    </div>
  );
};

export default Page;
