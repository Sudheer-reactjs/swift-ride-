import React from "react";
import Link from "next/link";
import { getPlanName } from "@/utils/common.utils";

interface SelectedPrice {
    interval: string;
    price: number;
    overage_price?: number;
}

interface CarData {
    selectedPrice?: SelectedPrice;
}

interface PlanTypeProps {
    carData: CarData;
}

const PlanType: React.FC<PlanTypeProps> = ({ carData }) => {
    const isUSA = false; // Set to true if needed
    const { distanceUnit, distanceAbbv } = isUSA
        ? { distanceUnit: "miles", distanceAbbv: "mi" }
        : { distanceUnit: "kilometers", distanceAbbv: "km" };

    return (
        <div className="bg-[#1D2125] p-[24px] rounded-[12px] mt-[24px] md:mt-[0]  md:min-h-[100%]">
            <div className="flex justify-between items-center">
                <h3 className=" text-[#57E667]">Plan Type</h3>
                <Link href="/plans">
                    <button className="cutom-button-outline">
                        Change
                    </button>
                </Link>
            </div>

            <div className="mt-[24px]">
                <h6 className="text-[16px] mb-3">
                    Your Plan Name: <span className="text-[#57E667]">{getPlanName(carData?.selectedPrice?.interval)}</span>
                </h6>
                
                <div className="p-4 border-[#57E667] border-[1px] border-solid rounded-[12px]">
                    <div className="flex justify-between pb-2">
                        <h6 className="text-white md:text-[18px]">Pay as you go</h6>
                        <p className="">
                            ${carData?.selectedPrice?.price} / {carData?.selectedPrice?.interval}
                        </p>
                    </div>
                    <div className="pt-2">
                        <p className="text-[14px] text-right ">
                            Overage {distanceUnit}: ${carData?.selectedPrice?.overage_price || 0} / {distanceAbbv}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanType;
