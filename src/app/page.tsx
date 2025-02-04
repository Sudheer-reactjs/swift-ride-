
import Image from "next/image";
import Button from "./components/Button";
export default function Home() {
  return (
      <section className="w-full relative mt-[-121px]"> 
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
           <div className="absolute w-full top-[23%] md:top-[228px] text-center">
          <div className="container">
            <h1 className="mb-[16px]">Subscribe and Drive</h1>
            <h2 className="mb-[60px]">
              Flexible instant car access to
              <span className="gradient-text"> anyone</span>
            </h2>
            <Button href="/" className="m-auto"> 
               Get Started
            </Button>
          </div>
        </div>
      </section>
  );
}
