import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    CallIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  TiwtterIcon,
} from "@/utils/svg";

const Footer = () => {
  return (
    <footer className="mt-[80px] pt-[25px] lg:mt-[100px] lg:pt-[64px]">
      <div className="container">
        <div className="flex flex-col justify-between md:items-center gap-[40px] md:flex-row">
          <div className="mb-[10px] lg:mb-0">
            <Link href="/">
              <Image
                src="/assets/footer-logo.png"
                alt="footer-logo"
                width={152}
                height={59}
                className="object-contain min-w-[152px]"
              />
            </Link>
          </div>
            <ul className="flex md:justify-center flex-wrap gap-[20px] md:gap-[40px] w-full flex-col md:flex-row">
              <li>
                <Link href="/overview">Overview</Link>
              </li>
              <li>
                <Link href="/cars">Car</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <div className="w-full max-w-[190px]">
              <ul className="contact-icon flex flex-col gap-[15px]">
                <li>
                  <a href="tel:+678-404-0782">
                    <CallIcon /> +678-404-0782
                  </a>
                </li>
                <li>
                  <a href="mailto:info@swiftride.net">
                    <EmailIcon />
                    info@swiftride.net
                  </a>
                </li>
                <li>
                  <LocationIcon /> Atlanta, Georgia
                </li>
              </ul>
              <ul className="flex gap-[24px] mt-[30px]"> 
                <li>
                  <a href="#" target="_blank">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <LinkedinIcon />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <TiwtterIcon />
                  </a>
                </li>
              </ul>
          </div>
        </div>
        <div className="py-[22px] mt-[40px]">
          <ul className="font-[300] flex flex-wrap gap-[24px] w-full mb-[16px]">
            <li>
              <Link href="/">Terms</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
          </ul>
          <p className="text-[14px] font-[300] md:text-[16px]">
            @ 2023 Arrivy Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
