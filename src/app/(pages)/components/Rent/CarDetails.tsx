'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

interface Car {
    id: number;
    make: string;
    model: string;
    year: string;
    car_basics: string;
    car_features: string;
    price: number;
    img_url: string;
    status: string;
    country: string;
    vin: string;
}

const CarDetails = () => {
    const [car, setCar] = useState<Car | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        // Mock data - replace with your actual data fetching logic
        const mockCarData: { [key: string]: Car } = {
            '1234567890': {
                id: 1,
                make: "Toyota",
                model: "Corolla",
                year: "2020",
                car_basics: "Economy",
                car_features: "Air conditioning, Bluetooth",
                price: 100,
                img_url: "/assets/product-image.png",
                status: "active",
                country: "US",
                vin: "1234567890"
            },
            // Add more mock data as needed
        };

        const vin = searchParams.get('vin');
        if (vin && mockCarData[vin]) {
            setCar(mockCarData[vin]);
        }
    }, [searchParams]);

    if (!car) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">Car not found</div>
            </div>
        );
    }

    return (
        <div>
            <Breadcrumb />
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        <div className="relative">
                            <Image
                                src={car.img_url}
                                alt={`${car.make} ${car.model}`}
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                {car.status === "active" ? (
                                    <span className="px-4 py-2 text-sm font-semibold text-black bg-green-300 rounded-full">
                                        Available
                                    </span>
                                ) : (
                                    <span className="px-3 py-1 text-xs font-semibold text-green-300 bg-gray-800 rounded-full">
                                        Unavailable
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold">
                                    {car.make} {car.model} {car.year}
                                </h1>
                                <p className="text-gray-500 mt-2">VIN: {car.vin}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">Car Basics</h2>
                                <p className="text-gray-700">{car.car_basics}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">Features</h2>
                                <p className="text-gray-700">{car.car_features}</p>
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold mb-2">Price</h2>
                                {car.price > 0 ? (
                                    <p className="text-2xl text-green-600 font-bold">
                                        ${car.price / 100}/Wk
                                    </p>
                                ) : (
                                    <p className="text-gray-400">Pricing not available</p>
                                )}
                            </div>

                            <div className="pt-6">
                                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Reserve Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;