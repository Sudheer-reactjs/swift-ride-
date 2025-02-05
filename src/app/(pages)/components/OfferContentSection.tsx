import Image from "next/image";

interface ContentSectionProps {
  title: string;
  highlightWord?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageWidth: number; // Make width required
  imageHeight: number; // Make height required
  reverse?: boolean; // If true, image appears on the left
}

const OfferContentSection: React.FC<ContentSectionProps> = ({
  title,
  highlightWord,
  paragraphs,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-[10px] md:gap-[40px] lg:gap-[80px] `}>
      <div className="w-full md:w-[52%] text-left md:text-left lg:p-[24px]">
      <h2 className="!text-[20px] md:!text-[30px]">
          {highlightWord
            ? title.split(" ").map((word, index) =>
                word === highlightWord ? (
                  <span key={index} className="gradient-text">{word}</span>
                ) : (
                  ` ${word} `
                )
              )
            : title}
        </h2>
        {paragraphs.map((text, index) => (
          <p key={index} className="mt-[20px]">
            {text}
          </p>
        ))}
      </div>
      <div className="w-full  md:w-[48%] flex justify-center">
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} layout="intrinsic" className="object-contain"/>
      </div>
    </div>
  );
};

export default OfferContentSection;
