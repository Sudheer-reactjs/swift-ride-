import React from 'react';
import Breadcrumb from "@/components/Breadcrumb";
import TimeAndPlaceCard from '../components/booking-details/timeAndPlaceCard';

const Page = () => {
    return (
        <div>
             <Breadcrumb />
             <h1 className="text-center">Booking Details</h1>
             <TimeAndPlaceCard />
        </div>
    );
}

export default Page;
