import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import HowItWorkSection from "../components/HowItWorkSection";

const Page = () => {
  return (
    <div>
      <section className="inline-block w-full relative my-[60px] lg:my-[100px] ">
        <div className="container">
          <div className="grid md:grid-cols-2 justify-center ">
            <div className="pb-[30px] lg:py-[30px] flex flex-col gap-[24px]">
              <h1 className="max-w-[500px] w-full">
                You are just a <span className="gradient-text">couple</span> of
                steps away!
              </h1>
              <p className="large-text max-w-[550px] w-full">
                Your Swift Ride journey is just moments away. Follow these
                simple steps to unlock the freedom o f hassle-free car
                ownership.
              </p>
              <Button href="#" className="hidden md:block">
                Get The App
              </Button>
            </div>
            <div className="md:mr-[-20px] lg:mr-[0]">
              <Image
                src="/assets/car-Br9a-LcU.png"
                alt="car-Br9a-LcU"
                width={720}
                height={418}
                className="object-contain lg:absolute lg:right-0 z-[3] lg:max-w-[50%] top-0 hidden md:block"
              />
              <Image
                src="/assets/car-Br9a-LcU-mobile.png"
                alt="car-Br9a-LcU"
                width={720}
                height={418}
                className="object-contain z-[3] lg:max-w-[50%] md:hidden"
              />
              <Button href="#" className="mt-[30px] md:hidden">
                Get The App
              </Button>
              <div className="box-shadow1 z-[1]"></div>
              <div className="box-shadow2 z-[1] hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  relative z-[1] md:pt-[24px]">
        <div className="container">
          <h2 className="h1 text-center !text-[24px] md:!text-[48px] mb-[40px] md:mb-0">
            How <span className="gradient-text">It Works</span> 
          </h2>
          <div className="flex flex-col gap-[20px]">
            <HowItWorkSection
              title={
                <>
                  <span>01</span> Apply
                </>
              }
              content="Kickstart your Swift Ride experience by completing a hassle-free application."
              imageUrl="/assets/apply.png"
            />
            <HowItWorkSection
              title={
                <>
                  <span>02</span> Sign Agreement
                </>
              }
              content="Complete the process seamlessly by sigining our user-friendly agreement."
              imageUrl="/assets/sign-agreement.png"
            />
             <HowItWorkSection
              title={
                <>
                  <span>03</span> Book
                </>
              }
              content="Choose your desired subscription and schedule a pick up or delivery time."
              imageUrl="/assets/book.png"
            />
            <HowItWorkSection
              title={
                <>
                  <span>04</span> All done!
                </>
              } 
              content="With your booking confirmed, agreement signed, and pick-up/delivery scheduled, you’re all set!"
              imageUrl="/assets/all-done.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
