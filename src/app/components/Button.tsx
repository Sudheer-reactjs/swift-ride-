import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link href={href} className={`button-gradient common-button flex justify-center items-center w-full md:w-max ${className}`}>
      {children}
    </Link>
  );
}
