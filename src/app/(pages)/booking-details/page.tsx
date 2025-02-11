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

    return (
        <div className="container mx-auto p-4">
            <Breadcrumb />
            <h1 className="text-center text-2xl font-semibold my-6">Booking Details</h1>
            <TimeAndPlaceCard 
                onDateChange={setDate}
                onTimeChange={setTime} 
            />
            
            <div className="py-10">
                <div className="container max-w-[980px]">
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
        </div>
    );
};

export default Page;