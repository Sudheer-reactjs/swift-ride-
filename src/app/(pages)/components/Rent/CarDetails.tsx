import React from "react";
import { CarDetailcon } from "@/lib/svg";

interface Plan {
  id: number;
  title: string;
  features: string[];
}

const plansData: Plan[] = [
    {
      id: 1,
      title: "Features",
      features: [
        "4 Doors",
        "1.4L",
        "AWD",
        "Automatic", // Remove the extra comma here
      ],
    },
    {
      id: 2,
      title: "Interiors",
      features: [
        "5 seats",
        "Grey",
      ],
    },
    {
      id: 3,
      title: "Accessories",
      features: [
        "Navigation",
        "Smart Device Integration",
        "Head-up Display",
        "Bluetooth",
      ],
    },
  ];

const CarDetails: React.FC = () => {
  return (
    <div className="w-full block py-[40px] md:py-[60px]">
    <div className="container">
       <h2 className="h1 text-center"><span className="gradient-text">Car </span> Details</h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[32px] mt-[24px] md:mt-[32px]">
        {plansData.map((plan) => (
          <div key={plan.id} className="bg-[#1D2125] p-[16px] md:p-[24px] rounded-[20px] gap-[16px] md:gap-[24px] flex flex-col">
            <div className="flex items-center">
               <CarDetailcon /> 
              <h4 className="text-white ml-2 text-lg font-semibold">{plan.title}</h4>
            </div>
            <ul className="md:large-text list-disc pl-[20px]">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CarDetails;
