import React from "react";

const JoinOurWaitlist = () => {
  return (
    <section className="w-full pt-[60px] lg:pt-[100px] relative">
      <div className="container">
        <div className="bg-charcoalColor rounded-[14px] md:rounded-[30px] relative z-[1] p-[24px] md:px-[32px] md:md:py-[50px] lg:py-[80px]">
          <div className="join-shape-before"></div>
          <div className="join-shape-after hidden md:block"></div>
          <div className="flex flex-col gap-[20px] md:gap-[32px] text-center relative z-[1]">
            <h2 className="h1 !text-[24px] md:!text-[48px]">
              <span className="text-[#57E667]">Join </span> our Waitlist!
            </h2>
            <p className="large-text max-w-[486px] w-full m-auto">
              Your questions matter to us. Feel free to reach out with any
              questions or concerns using the form below.
            </p>
            <form
              action="#"
              className="flex flex-col items-center space-y-[40px] md:space-y-[50px] max-w-[360px] w-full m-auto mt-[20px] md:mt-[4px]"
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <button
                type="submit"
                className="common-button button-gradient !w-full mt-[10px]  md:mt-[20px] "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurWaitlist;
