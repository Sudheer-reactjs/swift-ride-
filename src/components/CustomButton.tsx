import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import ShadCN Button
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function CustomButton({ href, children, className }: ButtonProps) {
  return (
    <Button asChild className={`button-gradient common-button flex justify-center items-center w-full md:w-max ${className}`}>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
