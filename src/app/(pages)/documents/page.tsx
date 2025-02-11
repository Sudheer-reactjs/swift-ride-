/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from "react";

const Page = () => {
    const [value, setValue] = React.useState(0)

    return (
        <div className="flex justify-center items-center pt-[40px] md:pt-[60px]">
            <div className=" container !max-w-[612px]">
                    <div className="flex basis-0 p-[16px] md:p-10 bg-[#1d2125] rounded-[10px] flex-col justify-start items-start gap-[30px]">
                        <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
                            <div className="w-[438px] flex-col justify-start items-start gap-5 inline-flex">
                                <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
                                    <h3 className=" text-[#57e667]">Documents</h3>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-normal">Please remember to collect your insurance card and registration documents when picking up your vehicle. If they are lost, stolen, or you were unable to collect them, please reach out to our Dream Car partner team for assistance:</div>
                        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch text-white md:text-xl font-semibold font-['Inter'] leading-7">Phone</div>
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">+61 8 6119 9999</div>
                                </div>
                            </div>
                            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch text-white md:text-xl font-semibold font-['Inter'] leading-7">Email</div>
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">info@dreamcarrental.au</div>
                                </div>
                            </div>
                            <div className="self-stretch  flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch  justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 justify-start items-center gap-2 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">Our customer service representatives are available to assist you Monday through Saturday, from 8:00 am to 6:00 pm.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}

export default Page;
