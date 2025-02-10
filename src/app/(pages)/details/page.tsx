import React, { Suspense } from 'react';
import RentHero from '../components/Rent/RentHero';
import CarDetails from '../components/Rent/CarDetails';
import Delivery from '../components/Rent/Delivery';

const Page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <RentHero />
                <CarDetails />
                <Delivery />
            </div>
        </Suspense>
    );
}

export default Page;
