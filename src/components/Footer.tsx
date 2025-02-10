import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CallIcon,
  EmailIcon,
  LocationIcon,
} from "@/lib/svg";
import SocialMedia from "./SocialMedia";
import { isLoggedIn } from "@/utils";

const Footer = () => {
  return (
    <footer className="mt-[60px] pt-[25px] lg:mt-[100px] lg:pt-[64px]">
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
          {!isLoggedIn ?
            <ul className="flex md:justify-center flex-wrap gap-[20px] md:gap-[40px] w-full flex-col md:flex-row">
              <li>
                <Link href="/how-it-work">How It Works</Link>
              </li>
              <li>
                <Link href={'/services'}>Services</Link>
              </li>
              <li>
                <Link href="/plans">Plans</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>

            </ul>
            :

            <ul className="flex md:justify-center flex-wrap gap-[20px] md:gap-[40px] w-full flex-col md:flex-row">
              <li>
                <Link href="/overview">Overview</Link>
              </li>
              <li>
                <Link href={'/documents'}>Documents</Link>
              </li>
              <li>
                <Link href="/cars">Cars</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>

            </ul>}
          <div className="min-w-[190px]">
            <ul className="contact-icon flex flex-col gap-[15px] max-svg">
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
            <div className="footer-social">
              <SocialMedia />
            </div>
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
