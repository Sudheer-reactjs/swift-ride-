/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from "react";

const Page = () => {
    const [value, setValue] = React.useState(0)

    return (
        <div className="flex justify-center items-center">
            <div className=" mx-6 md:mx-20 md:max-w-[500px]">
                <div className="justify-start items-start gap-5 inline-flex">
                    <div className="grow shrink basis-0 p-10 bg-[#1d2125] rounded-[10px] flex-col justify-start items-start gap-[30px] inline-flex">
                        <div className="self-stretch justify-start items-center gap-[30px] inline-flex">
                            <div className="w-[438px] flex-col justify-start items-start gap-5 inline-flex">
                                <div className="self-stretch justify-start items-start gap-3.5 inline-flex">
                                    <div className="grow shrink basis-0 text-[#57e667] text-3xl font-semibold font-['Inter'] leading-9">Documents</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-normal">Please remember to collect your insurance card and registration documents when picking up your vehicle. If they are lost, stolen, or you were unable to collect them, please reach out to our Dream Car partner team for assistance:</div>
                        <div className="self-stretch h-[199px] flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch text-white text-xl font-semibold font-['Inter'] leading-7">Phone</div>
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">+61 8 6119 9999</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[60px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch text-white text-xl font-semibold font-['Inter'] leading-7">Email</div>
                                <div className="self-stretch justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">info@dreamcarrental.au</div>
                                </div>
                            </div>
                            <div className="self-stretch h-[31px] flex-col justify-start items-start gap-2 flex">
                                <div className="self-stretch h-[31px] justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-12 justify-start items-center gap-2 flex">
                                        <div className="grow shrink basis-0 text-white text-base font-normal font-['Inter'] leading-normal">Our customer service representatives are available to assist you Monday through Saturday, from 8:00 am to 6:00 pm.</div>
                                    </div>
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
