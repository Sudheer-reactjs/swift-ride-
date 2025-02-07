import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import PlansSection from "../components/PlansSection";
import JoinOurWaitlist from "../components/JoinOurWaitlist";
import FaqSection from "../components/FaqSection";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <div>
      <section className="inline-block w-full relative my-[28px] md:my-[60px] lg:my-[100px] ">
        <div className="container">
          <div className="grid md:grid-cols-2 justify-center ">
            <div className="pb-[30px] lg:py-[30px] flex flex-col gap-[24px]">
              <h6 className="text-lightGreen text-[14px] md:text-[18px] font-normal md:font-semibold">
                Subscription Plans
              </h6>
              <h1 className="max-w-[500px] w-full mt-[-10px]">
                Choose a plan that&apos;s right for
                <span className="gradient-text"> you</span>
              </h1>
              <p className="large-text max-w-[450px] w-full">
                At Swift Ride our plans are crafted to cater to your unique
                needs.
              </p>
              <CustomButton href="/how-it-work" className="mt-[30px] hidden md:block">
                Learn More
              </CustomButton>
            </div>
            <div className="">
              <Image
                src="/assets/plan.png"
                alt="plan"
                width={789}
                height={511}
                className="object-contain relative right-[-16px] lg:absolute lg:right-0 z-[3] lg:max-w-[50%] top-0"
              />
              <CustomButton href="/how-it-work" className="md:hidden">
                Learn More
              </CustomButton>
              <div className="box-shadow1 z-[1]"></div>
              <div className="box-shadow2 z-[1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-[0px] md:pt-[60px] relative z-[1]">
        <div className="container">
          <h2 className="h1 text-center !text-[24px] md:!text-[48px] py-[24px]">
             Plans
          </h2>
          <PlansSection />
        </div>
      </section>

      <JoinOurWaitlist />
      <FaqSection />
      <ContactForm />
    </div>
  );
};

export default Page;
