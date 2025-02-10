import React from 'react';
import RentHero from '../components/Rent/RentHero';
import CarDetails from '../components/Rent/CarDetails';
import Delivery from '../components/Rent/Delivery';

const Page = () => {
    return (
        <div>
            <RentHero />
            <CarDetails />
            <Delivery />
        </div>
    );
}

export default Page;
