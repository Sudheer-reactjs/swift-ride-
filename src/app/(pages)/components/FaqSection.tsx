import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="w-full pt-[50px] md:pt-[100px] relative z-[1] ">
      <div className="container">
        <div className="faq-shadow"></div>
        <h2 className="h1 text-center !text-[24px] md:!text-[48px] py-[24px]">
          FAQ
        </h2> 
        <div className="max-w-[650px] w-full m-auto md:py-[45px]">
        <Accordion type="single" collapsible >

          <AccordionItem value="item-1">
            <AccordionTrigger className="custom-accordion-trigger">How does the application process work?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="custom-accordion-trigger">What is a car subcription?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="custom-accordion-trigger">What documents do I need to apply for a Swift Ride subscription?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="custom-accordion-trigger">Can I switch vehicles during my subscription?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="custom-accordion-trigger">Is there a minimum subscription period?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="custom-accordion-trigger">What is the minimum age requirement?</AccordionTrigger>
            <AccordionContent className="custom-accordion-content">
               Your questions matter to us. Feel free to reach out with any questions or concerns using the form below. 
            </AccordionContent>
          </AccordionItem>

        </Accordion> 
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
