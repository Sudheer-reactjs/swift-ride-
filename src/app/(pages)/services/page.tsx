import React from "react";
import OfferContentSection from "../components/OfferContentSection";
import JoinOurWaitlist from "../components/JoinOurWaitlist";
import ContactForm from "../components/ContactForm";
import CustomButton from "@/components/CustomButton";

const Page = () => {
  return (
    <div>
      <section className="w-full pt-[15px] md:pt-[60px]  lg:pt-[100px]relative">
        <div className="container">
          <div className="bg-charcoalColor px-[24px] py-[40px] rounded-[14px] md:rounded-[30px] relative z-[1]">
            <div className="Vision-shadow-one z-[-1]"></div>
            <div className="Vision-shadow-two z-[-1] hidden md:block"></div>
            <div className="Vision-shadow-three z-[-1] hidden md:block"></div>
            <div className="text-center flex flex-col gap-[13px] relative z-[1]">
              <h6 className="text-lightGreen text-[14px] md:text-[18px] font-normal md:font-semibold">
                Our Vision
              </h6>
              <h1 className="mb-[5px] md:mb-[15px]">
                Pioneering <span className="gradient-text">the Future </span> of
                Mobility
              </h1>
              <p className="md:text-[20px] md:leading-[28px] font-normal max-w-[750px] m-auto">
                Our vision is simple yet transformative: to provide everyone
                with affordable self-driving car subscriptions, bringing the
                future of transport to your doorstep and redefining the very
                essence of car ownership.
              </p>
              <CustomButton  href="/how-it-work" className="m-auto mt-[20px] md:mt-[45px]">
                Learn More
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-[60px] md:pt-[100px] relative z-[1]">
        <div className="container !max-w-[1180px]">
          <h2 className="h1 text-center py-[24px] mb-[10px] md:mb-[30px] !text-[24px] md:!text-[48px]">
            What We <span className="gradient-text">Offer? </span>
          </h2>
          <div className="flex flex-col gap-[20px]">
            <OfferContentSection
              title="Affordable Access for All"
              highlightWord="Access"
              paragraphs={[
                "At Swift Ride, we believe that the benefits of cutting-edge transportation should be accessible to everyone.",
                "Our vision centers around breaking down barriers and making self-driving car subscriptions an affordable reality for people from all walks of life.",
              ]}
              imageSrc="/assets/access.png"
              imageAlt="access"
              imageWidth={500}
              imageHeight={500}
              reverse={false} // Image on the right
            />
            <OfferContentSection
              title="Shaping the Future of Transport"
              highlightWord="Future"
              paragraphs={[
                "We envision a future where commuting is not just a necessity but a seamless, enjoyable experience. By introducing self-driving capabilities into our subscriptions, we are at the forefront of shaping the future of transport.",
                "Imagine a world where your car becomes your personal assistant, adapting to your needs and ensuring a stress-free journey.",
              ]}
              imageSrc="/assets/future.png"
              imageAlt="access"
              imageWidth={500}
              imageHeight={500}
              reverse={true} // Image on the left
            />
            <OfferContentSection
              title="Pioneering Innovation"
              highlightWord="Innovation"
              paragraphs={[
                "Swift Ride is not just a car subscription service; we are pioneers of innovation. Our commitment to being at the forefront of technological advancements in transportation sets us apart. ",
                "By introducing self-driving cars into our fleet, we aim to lead the way in redefining how people perceive and experience car ownership.",
              ]}
              imageSrc="/assets/innovation.png"
              imageAlt="access"
              imageWidth={500}
              imageHeight={500}
              reverse={false} // Image on the right
            />
            <OfferContentSection
              title="Redefining Car Ownership"
              highlightWord="Car"
              paragraphs={[
                "Traditional car ownership comes with responsibilities and limitations. Our vision is to redefine this concept by offering a subscription model that provides all the benefits of owning a car without the hassles. ",
                "With self-driving capabilities, we’re not just changing how you own a car; we’re changing how you perceive and interact with it.",
              ]}
              imageSrc="/assets/car.png"
              imageAlt="access"
              imageWidth={500}
              imageHeight={500}
              reverse={true} // Image on the left
            />
          </div>
        </div>
      </section>
      <JoinOurWaitlist />
      <ContactForm />
    </div>
  );
};

export default Page;
