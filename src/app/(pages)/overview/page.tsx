/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import WarningText from '@/components/warning-text';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    const [value, setValue] = React.useState(0)

    return (
        <div className='gap-8 lg:flex lg:mx-20 mx-5 mb-10 h-auto'>
            <div className="w-full  flex-1 flex-col justify-start items-start gap-8 inline-flex ">
                <div className="w-full p-6 h-[235px] bg-[#1d2125] rounded-[20px] flex-col justify-start items-start gap-8 flex">
                    <div className="text-white  text-2xl font-semibold font-['Inter'] leading-loose">Overview</div>
                    <div className="self-stretch  justify-start items-start gap-10 inline-flex">
                        <div className="flex-col justify-between items-start inline-flex">
                            <div className="justify-start items-center gap-[23px] inline-flex">
                                <Image className="w-[110px] h-[110px] rounded-full" src="/assets/prof.png" alt='' width={50} height={50} />
                                <div className="flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">Michael Rodrigez</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-[#1d2125] w-full rounded-[20px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                        <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">Personal Information</div>
                        <div className="w-12 h-12 p-2.5 bg-gradient-to-r  from-[#2bdf68] to-[#b3f462] rounded-[100px] justify-center items-center flex overflow-hidden">
                            <Image src='/assets/edit.svg' alt='' width={100} height={100} className='w-20 h-20' />
                        </div>
                    </div>
                    <div className="self-stretch h-[232px] flex-col justify-start items-start gap-8 flex">
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="w-[180px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">First Name</div>
                                <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">Michael</div>
                            </div>
                            <div className="w-[300px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">Last Name</div>
                                <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">Rodrigez</div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="w-[180px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">Date of birth</div>
                                <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">10.02.1996</div>
                            </div>
                            <div className="w-[300px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">Telephone</div>
                                <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">+ 123 456 09700</div>
                            </div>
                        </div>
                        <div className="self-stretch justify-between items-center inline-flex">
                            <div className="flex-col justify-start items-start gap-8 inline-flex">
                                <div className="h-14 flex-col justify-center items-start gap-2 flex">
                                    <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">Email</div>
                                    <div className="text-center text-white text-lg font-semibold font-['Inter'] leading-7">mail@mail.com</div>
                                </div>
                            </div>
                            <div className="w-[300px] flex-col justify-center items-start gap-2 inline-flex">
                                <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-tight">Documents</div>
                                <div className="w-[140px] h-5 rounded-3xl justify-center items-center inline-flex">
                                    <div className="w-[140px] text-[#57e667] text-base font-semibold font-['Rubik'] leading-snug">See All</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`self-stretch p-6 bg-[#1d2125] rounded-[20px] flex-col justify-start ${!value ? 'items-center' : ''} gap-8 flex`}>
                    <div className="self-stretch flex-col justify-start items-start gap-10 flex">
                        <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">Billing</div>
                        {!value ? <div className="self-stretch h-[216px] flex-col justify-center items-start gap-8 flex">
                            <div className="self-stretch h-[76px] flex-col justify-start items-start gap-5 flex">
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Next bill date</div>
                                    <div className="text-white text-lg font-semibold font-['Inter'] leading-7">Mon, October 10</div>
                                </div>
                                <div className="self-stretch h-7 flex-col justify-start items-start gap-2 flex">
                                    <div className="self-stretch justify-between items-center inline-flex">
                                        <div className="text-white text-lg font-semibold font-['Inter'] leading-7">Visa</div>
                                        <div className="text-white text-lg font-semibold font-['Inter'] leading-7">**9234</div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
                                <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Receipts</div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-semibold font-['Inter'] leading-7">Mon, October 10</div>
                                    <div className="text-white text-lg font-semibold font-['Inter'] leading-7">$ 120</div>
                                </div>
                                <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="text-white text-lg font-semibold font-['Inter'] leading-7">Fri, October 5</div>
                                    <div className="text-white text-lg font-semibold font-['Inter'] leading-7">$ 120</div>
                                </div>
                            </div>
                        </div> : <WarningText text='You are currently not added a billing method' />}
                    </div>
                    {!value ?
                        <div className={`w-[187px] h-[42px] px-5 py-[9px] rounded-3xl border border-white justify-center items-center inline-flex`}>
                            <div className="w-[147px] text-center text-white text-base font-medium font-['Inter'] leading-normal">See More</div>
                        </div>
                        :
                        <div className="w-[252px] h-[42px] px-5 py-[9px] bg-gradient-to-r from-[#2bdf68] to-[#b3f462] rounded-3xl">
                            <div className="w-[212px] text-center text-[#181818] text-base font-medium font-['Inter'] leading-normal">Update Payment Method</div>
                        </div>
                    }
                </div>
            </div>
            <div className="flex-1 w-full flex-col justify-start items-start gap-8 inline-flex ">

                <div className="h-[251px] w-full p-6 bg-[#1d2125] rounded-[20px] flex-col justify-start items-center gap-8 inline-flex">
                    <div className="self-stretch h-[129px] flex-col justify-start items-start gap-10 flex">
                        <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">Subcription</div>
                        <div className="self-stretch h-[57px] flex-col justify-center items-start gap-8 flex">
                            <div className="self-stretch h-[57px] flex-col justify-start items-start gap-5 flex">
                                {!value ? <div className="self-stretch justify-between items-center inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">Standart Plan</div>
                                        <div className="text-white text-lg font-light font-['Rubik']">Renew 12.03.2024</div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                                        <div className="self-stretch justify-between items-center inline-flex">
                                            <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">$ 120</div>
                                        </div>
                                    </div>
                                </div>
                                    :
                                    <WarningText text='No active subscriptions' />}
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                        <div className="w-[292px] h-[42px] px-5 py-[9px] bg-gradient-to-r from-[#2bdf68] to-[#b3f462] rounded-3xl justify-center items-center flex">
                            <div className="w-[252px] text-center text-[#181818] text-base font-medium font-['Inter'] leading-normal">{!value ? 'Manage Subscription' : 'View Plans'}</div>
                        </div>
                    </div>
                </div>

                <div className={`p-6 bg-[#1d2125] rounded-[20px] flex-col justify-start ${!value ? 'items-center' : ''} gap-8 inline-flex w-full`} >
                    <div className="self-stretch flex-col justify-start items-start gap-10 flex">
                        <div className="text-white text-2xl font-semibold font-['Inter'] leading-loose">Current Vehicle</div>
                        {!value ? <>
                            <Image className="w-full h-[297px] object-contain" src="/assets/white-car.png" alt='' width={50} height={50} />
                            <div className="self-stretch h-7 flex-col justify-center items-start gap-8 flex">
                                <div className="self-stretch justify-center items-center gap-5 inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-center items-center gap-4 inline-flex">
                                        <div className="text-center text-white text-xl font-semibold font-['Inter'] leading-7">Mercedes-Benz-E-Class 2014, Silver</div>
                                    </div>
                                </div>
                            </div></>
                            :
                            <WarningText text='No active subscriptions' />}
                    </div>
                    {!value ? <div className="h-[58px] px-5 w-full pt-[19px] pb-[18px] rounded-[100px] border-2 border-white justify-center items-center flex">
                        <div className="w-full text-center text-white text-lg font-black font-['HeliosBlackC']">Change Vehicle</div>
                    </div>
                        :
                        <div className="w-[292px] h-[42px] px-5 py-[9px] bg-gradient-to-r from-[#2bdf68] to-[#b3f462] rounded-3xl justify-center flex">
                            <div className="w-[252px] text-center text-[#181818] text-base font-medium font-['Inter'] leading-normal">{!value ? 'Manage Subscription' : 'View Plans'}</div>
                        </div>
                    }
                </div>
                <div className="w-full self-stretch justify-center items-start inline-flex">
                    <div className="w-full flex flex-col justify-start items-start gap-8">
                        <div className="w-full p-6 bg-[#1d2125] rounded-[20px] flex-col justify-start items-start gap-8 inline-flex">
                            <div className="justify-start items-center gap-8 inline-flex">
                                <div className="text-white text-lg  xl:text-2xl font-semibold font-['Inter'] leading-loose">
                                    Driver’s License Verification
                                </div>
                                <div className={`w-[148px] h-[42px] px-5 py-[9px] ${!value ? 'bg-[#43fc47]/40' : 'bg-[#e3d734]/95'} rounded-3xl  justify-center items-center flex`}>
                                    <div className={`w-[108px] text-center ${!value ? 'text-white' : 'text-black'} text-base font-medium font-['Inter'] leading-normal border-none outline-none`}>{!value ? 'Verified' : 'Unverified'}</div>
                                </div>
                            </div>
                            {value ? <div className="w-[198px] h-[42px] px-5 py-[9px] bg-gradient-to-r from-[#2bdf68] to-[#b3f462] rounded-3xl border justify-center items-center inline-flex">
                                <div className="w-[158px] text-center text-[#181818] text-base font-medium font-['Inter'] leading-normal">Verify DL</div>
                            </div>
                                : ''}
                        </div>
                        <div className="w-full p-6 bg-[#1d2125] rounded-[20px] flex-col justify-start items-start gap-8 inline-flex">
                            <div className="justify-start items-center gap-8 inline-flex">
                                <div className="text-white text-lg xl:text-2xl font-semibold font-['Inter'] leading-loose">
                                    Driver’s License Verification
                                </div>
                                <div className={`w-[148px] h-[42px] px-5 py-[9px] ${!value ? 'bg-[#43fc47]/40' : 'bg-[#e3d734]/95'} rounded-3xl  justify-center items-center flex`}>
                                    <div className={`w-[108px] text-center ${!value ? 'text-white' : 'text-black'} text-base font-medium font-['Inter'] leading-normal border-none outline-none`}>{!value ? 'Verified' : 'Unverified'}</div>
                                </div>
                            </div>
                            {
                                value ? <div className="w-[383px] h-[42px] px-5 py-[9px] bg-gradient-to-r from-[#2bdf68] to-[#b3f462] rounded-3xl border justify-center items-center inline-flex">
                                    <div className="w-[343px] text-center text-[#181818] text-base font-medium font-['Inter'] leading-normal">Upload Rideshare Account Screenshot</div>
                                </div>
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Page;
