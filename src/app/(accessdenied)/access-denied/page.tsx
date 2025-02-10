import CustomButton from '@/components/CustomButton';
import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <section className="py-[60px] text-center min-h-[100vh] flex items-center access-page">
            <div className="container">
                <h1>Sorry, you don’t have an access to this page :(</h1>
               <CustomButton href="/" className="m-auto !py-[8px] md:!max-w-[280px] !w-full !text-[18px] mt-[54px] md:mt-[40px]">
                  Go To Main
                </CustomButton>
                <Image
                        src="/assets/access-denied.png"
                        alt="access-denied"
                        layout="intrinsic"
                        width={424}
                        height={408}
                        className="object-contain m-auto mt-[54px] md:mt-[100px] !max-w-[270px] md:!max-w-fit"
                      />
            </div>
        </section>
    );
}

export default Page;
