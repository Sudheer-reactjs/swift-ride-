import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CarDetails {
    make: string;
    model: string;
    year: string;
    color: string;
    img_url: string;
}

interface CarTypeProps {
    carDetails: CarDetails;
}

const CarType: React.FC<CarTypeProps> = ({ carDetails }) => {
    return (
        <div className="bg-[#1D2125] p-[24px] rounded-[12px]">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#57E667]">Car Type</h3>
                <Link href="/rent">
                    <button className="cutom-button-outline">
                        Change
                    </button>
                </Link>
            </div>
            <div className="mt-[24px]">
                <h6 className="text-[16px] mb-3">
                    {carDetails.make} - {carDetails.model} - {carDetails.year} {carDetails.color}
                </h6>
                <div className="w-full flex justify-center">
                    <Image
                        src={carDetails.img_url || "/assets/mercedes.png"}
                        alt="Car"
                        width={400}
                        height={160}
                        className=""
                    />
                </div>
            </div>
        </div>
    );
}

export default CarType;
