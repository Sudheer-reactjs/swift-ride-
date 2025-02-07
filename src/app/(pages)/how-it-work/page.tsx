import React from "react";
import Image from "next/image";
import HowItWorkSection from "../components/HowItWorkSection";
import CustomButton from "@/app/components/CustomButton";
import Link from "next/link";
import { AppStore, GooglePlay } from "@/lib/svg";

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
              <CustomButton href="#" className="hidden md:block">
                {" "}
                Get The App
              </CustomButton>
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
              <CustomButton href="#" className="mt-[30px] md:hidden">
                Get The App
              </CustomButton>
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
      <section className="how-work-section relative z-[4] inline-block w-full mt-[60px] lg:mt-[100px]">
        <div className="container">
          <div className="grid md:grid-cols-[49%_51%] items-center gap-[24px]">
            <div className="">
              <h6 className="text-lightGreen text-[14px] md:text-[18px] font-normal md:font-semibold">
                Get the App
              </h6>
              <h2 className="h1 !text-[24px] md:!text-[48px] max-w-[430px] w-full mb-[20px] mt-[10px]">
                How mu ch <span className="gradient-text">easier </span>can it
                get?
              </h2>
              <p className="large-text max-w-[470px] w-full">
                Browse, book, unlock and manage your car seamlessly with our user-friendly app, available for iOS and Android.
              </p>
              <div className="apple-store-icon flex items-center gap-[12px] md:ap-[20px] mt-[40px]">
                <Link href="https://apps.apple.com/app/6504147019" target="_blank">
                  {" "}
                  <AppStore />
                </Link>
                <Link href="https://play.google.com/store/apps/details?id=com.us.llc.swiftride&hl=en_US" target="_blank">
                  {" "}
                  <GooglePlay />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/assets/get-app.png"
                alt="banner"
                layout="intrinsic"
                width={646}
                height={650}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <Row>
                        <Col className={'mt-5 mb-3 d-flex justify-content-center'} xs={12} lg={12}>
                            <GoogleButton onClick={googleSignIn} />
                        </Col>
                    </Row>
    </div>
    
  );
};

export default Page;
