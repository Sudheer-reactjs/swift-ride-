"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, HamburgerIcon } from '@/lib/svg';
import { isLoggedIn } from "@/utils";


const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname();
  const isActive = (path: string) => (pathname === path ? "lightGreen" : "");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCollapsed]);

  const handleLinkClick = () => {
    setIsCollapsed(false);
  };

  return (
    <header className="py-[20px] md:py-[40px] relative z-[2] md:min-h-[121px]">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/logo.png" alt="Logo" width={108} height={41} className="min-w-[108px]" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleSidebar} className="block md:hidden text-gray-700">
            {isCollapsed ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Navigation */}
          <nav
            className={`main-menu ${isCollapsed
              ? "fixed top-0 left-0 w-4/5 h-full bg-[#444] p-6 z-50"
              : "hidden"
              } md:flex md:w-full md:pl-[40px] lg:pl-[72px] md:justify-between`}
          >
            {!isLoggedIn ?
              <ul
                className={`${isCollapsed ? "flex flex-col gap-3" : "flex gap-[30px]"
                  } md:flex-row`}
              >
                <li className={isActive("/how-it-work")}>
                  <Link href="/how-it-work" onClick={handleLinkClick}>
                    How It Works
                  </Link>
                </li>
                <li className={isActive("/services")}>
                  <Link href="/services" onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li className={isActive("/plans")}>
                  <Link href="/plans" onClick={handleLinkClick}>
                    Plans
                  </Link>
                </li>
                <li className={isActive("/contact-us")}>
                  <Link href="/contact-us" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              :
              <ul
                className={`${isCollapsed ? "flex flex-col gap-3" : "flex gap-[30px]"
                  } md:flex-row`}
              >
                <li className={isActive("/overview")}>
                  <Link href="/overview" onClick={handleLinkClick}>
                    Overview
                  </Link>
                </li>
                <li className={isActive("/documents")}>
                  <Link href="/documents" onClick={handleLinkClick}>
                    Documents
                  </Link>
                </li>
                <li className={isActive("/rent")}>
                  <Link href="/rent" onClick={handleLinkClick}>
                    Cars
                  </Link>
                </li>
                <li className={isActive("/contact-us")}>
                  <Link href="/contact-us" onClick={handleLinkClick}> 
                    Contact Us
                  </Link>
                </li>
              </ul>}
            <div className="flex lg:ml-[32px]">
          { !isLoggedIn  ?   <Link href="/sign-in" onClick={handleLinkClick} className="button-gradient login-button text-[#1D2125] font-bold  min-w-[101px] min-h-[39px] flex justify-center items-center">Log In</Link>
          :
                  <Link href="/sign-in" onClick={handleLinkClick} className="text-[#fff] border-solid border-[1px] border-[#fff] rounded-[60px] login-button min-w-[101px]  font-bold min-h-[39px] flex justify-center items-center">Log Out</Link>
          }
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
