import Image from "next/image";
import CustomButton from "@/components/CustomButton";
export default function Home() {
  return (
    <section className="w-full relative mt-[-88px] md:mt-[-121px]">
      <Image
        src="/assets/home-banner.png"
        alt="banner"
        layout="intrinsic"
        width={1440}
        height={1024}
        className="w-full h-auto hidden min-h-[100vh] object-cover object-top  md:block"
      />
      <Image
        src="/assets/mobile-banner.png"
        alt="banner"
        layout="intrinsic"
        width={1498}
        height={2400}
        className="w-full h-auto min-h-[100vh] object-contain object-top md:hidden"
      />
      <div className="absolute w-full top-[160px] md:top-[205px] text-center">
        <div className="container">
          <h1 className="mb-[16px]">Subscribe and Drive</h1>
          <h2 className="mb-[65%] md:mb-[60px] px-2"> 
            Flexible instant car access to
            <span className="gradient-text"> anyone</span>
          </h2>
          <CustomButton href="/services" className="m-auto">
            Get Started
          </CustomButton>
        </div>
      </div>
    </section>
  );
}
