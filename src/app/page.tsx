
import Image from "next/image";
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
      </section>
  );
}
