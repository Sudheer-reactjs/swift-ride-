"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BreadcrumbIcon } from "@/lib/svg";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className="pt-[20px] pb-[40px] md:py-[60px]">
      <div className="container ">
        <nav aria-label="breadcrumb" className="text-sm text-gray-500 ">
          <ol className="flex space-x-2">
            <li>
              <Link href="/overview" className="text-[#6B7280] text-[12px] ">
                Overview
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = "/" + pathSegments.slice(0, index + 1).join("/");
              const isLast = index === pathSegments.length - 1;
              return (
                <li
                  key={href}
                  className="flex items-center space-x-2 capitalize"
                >
                  <span>
                    <BreadcrumbIcon />
                  </span>
                  {isLast ? (
                    <span className="!text-[#57E667] text-[12px]">
                      {segment}
                    </span>
                  ) : (
                    <Link href={href} className="text-[#6B7280] text-[12px]">
                      {segment}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
