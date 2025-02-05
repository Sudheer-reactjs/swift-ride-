import Image from 'next/image';
import { ReactNode } from 'react';

interface HowItWorkSectionProps {
  title: ReactNode;  // Accepts JSX, strings, or other React elements
  content: string;
  imageUrl: string;
}

export default function HowItWorkSection({ title, content, imageUrl }: HowItWorkSectionProps) {
  return (
    <div className="grid md:grid-cols-2 items-center md:gap-[24px] px-[16px] md:px-[0]">
      <div className="number-text md:p-[24px] pl-[0]">
        <h2 className="mb-[12px] md:mb-[20px]">{title}</h2>
        <p className="max-w-[560px] md:text-[24px] md:leading-[32px] tracking-[-0.144px]">{content}</p>
      </div>
      <div className="flex justify-center">
        <Image src={imageUrl} alt="How It Works" width={500} height={450} className="object-contain" />
      </div>
    </div>
  );
}
