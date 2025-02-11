// Page.tsx
"use client"
import React from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import TimeAndPlaceCard from '../components/booking-details/timeAndPlaceCard';
import CarType from '../components/booking-details/CarType';
import PlanType from '../components/booking-details/PlanType';
import Summary from '../components/booking-details/Summary';
import { CarData } from '@/utils/types';

const carData: CarData = {
    carDetails: {
        make: "Mercedes",
        model: "S-Class",
        year: "2023",
        color: "Black",
        img_url: "/assets/product-image.png"
    },
    selectedPrice: {
        interval: "monthly",
        price: 499,
        overage_price: 0.15
    }
};

const Page: React.FC = () => {
    const [date, setDate] = React.useState<string | null>(null);
    const [time, setTime] = React.useState<string | null>(null);
    const [atlanta, setAtlanta] = React.useState<boolean>(false);
    const [errMessage, setErrMessage] = React.useState<string | null>(null);
    
    const handleContinueClick = () => {
        if (!atlanta) {
            setErrMessage("Please acknowledge the service area before continuing.");
        } else {
            setErrMessage(null);
            // Continue action logic here
        }
    };

    return (
        <div>
            <Breadcrumb />
            <h1 className="text-center text-2xl font-semibold my-6">Booking Details</h1>
            <TimeAndPlaceCard 
                onDateChange={setDate}
                onTimeChange={setTime} 
            />
            
            <div className="py-10 w-full">
                <div className="container !max-w-[980px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <CarType carDetails={carData.carDetails} />
                        <PlanType carData={carData} />
                    </div>
                </div>
            </div>
            <Summary 
                selectedPrice={carData.selectedPrice} 
                date={date} 
                time={time} 
            />  
            
            <div className="flex justify-center mt-[40px]">
                <div className="container !max-w-[980px]">
                    <label className="flex items-center justify-center form-group">
                        <input 
                            type="checkbox" 
                            checked={atlanta} 
                            onChange={() => {
                                setAtlanta(!atlanta);
                                localStorage.setItem("atlanta_checkbox", String(!atlanta));
                            }}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span>
                            By checking the box, you acknowledge Swift Ride currently ONLY serves clients in the Greater Atlanta area.
                        </span>
                    </label>
                </div>
            </div>
            
            {errMessage && (
                <div className="text-red-500 text-center mt-2 text-sm">{errMessage}</div>
            )}
            
            <div className="flex justify-center mt-[40px]">
                <button 
                    onClick={handleContinueClick} 
                    className="button-gradient text-[#191919] !py-3 !px-6 rounded-lg w-full max-w-xs "
                >
                    Next
                </button>
            </div>
            

        </div>
    );
};

export default Page;
