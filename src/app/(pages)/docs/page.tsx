import React from "react";
import SignaturePad from "../components/SignaturePad";

const Page = () => {
  return (
    <div className="w-full block">
      <div className="container !max-w-[1080px] w-full">
         <h2 className="text-center pt-[20px] pb-[50px] lg:py-[60px]">Please Read and Sign</h2>
        <SignaturePad />
      </div>
    </div>
  );
};

export default Page;
