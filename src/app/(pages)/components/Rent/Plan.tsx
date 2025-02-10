'use client';

import React, { useEffect, useState, useCallback } from 'react';
import {  useSearchParams, useRouter } from 'next/navigation';
import TruncatedText from '@/components/TruncatedText';
import MyPagination from '@/components/MyPagination';
import Image from 'next/image';

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

interface PlansProps {
    packageId: number;
    filter: string;
}

const Plans: React.FC<PlansProps> = ({ packageId, filter }) => {
    const [availableCars, setAvailableCars] = useState<Car[]>([]);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);
    const [page, setPage] = useState(1);
    
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const itemsPerPage = 6;

    useEffect(() => {
        const staticCars: Car[] = [
            {
                id: 1,
                make: "Toyota",
                model: "Corolla",
                year: "2020",
                car_basics: "Basic details",
                car_features: "Air conditioning, Bluetooth",
                price: 100,
                img_url: "https://via.placeholder.com/150",
                status: "active",
                country: "US",
                vin: "1234567890"
            },
            {
                id: 2,
                make: "Honda",
                model: "Civic",
                year: "2021",
                car_basics: "Basic details",
                car_features: "Leather seats, Sunroof",
                price: 150,
                img_url: "https://via.placeholder.com/150",
                status: "inactive",
                country: "US",
                vin: "0987654321"
            }
        ];

        setAvailableCars(staticCars);
    }, []);

    useEffect(() => {
        let cars = availableCars.filter(car => car.id === packageId);

        if (filter === "active") {
            cars = cars.filter(car => car.status === "active");
        } else if (filter === "inactive") {
            cars = cars.filter(car => car.status === "inactive");
        }

        setFilteredCars(cars);
        setPage(1);
    }, [availableCars, filter, packageId]);

    const handleViewButtonClick = useCallback((car: Car) => {
        const params = new URLSearchParams(searchParams);
        params.set('packageId', packageId.toString());
        params.set('vin', car.vin);
        
        router.push(`/details?${params.toString()}`);
    }, [router, packageId, searchParams]);

    const handleChangePage = useCallback((page: number) => {
        setPage(page);
    }, []);

    const currentCars = filteredCars.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div>
            {filteredCars.length === 0 ? (
                <div className="m-3 text-xl text-gray-600">Sorry, no cars currently available under this plan. Please check back later.</div>
            ) : (
                <div>
                    <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentCars.map((car) => (
                            <div key={car.id} className="bg-white shadow-lg rounded-lg p-5 flex flex-col h-full">
                                {car.status === "active" ? (
                                    <span className="self-start px-4 py-2 text-sm font-semibold text-black bg-green-300 rounded-full">
                                        Available
                                    </span>
                                ) : (
                                    <span className="self-start px-3 py-1 text-xs font-semibold text-green-300 bg-gray-800 rounded-full">
                                        Unavailable
                                    </span>
                                )}

                                <Image   src="/assets/mobile-banner.png"
                                 layout="intrinsic"
                                    alt={`${car.make} ${car.model}`} 
                                    width={350}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md mt-4" 
                                    />

                                <div className="mt-4 text-xl font-semibold">
                                    {car.make} {car.model} {car.year}
                                </div>

                                <div className="mt-2">
                                    <div className="text-gray-500">Car Basics</div>
                                    <div>{car.car_basics}</div>
                                </div>

                                <div className="mt-2">
                                    <div className="text-gray-500">Features</div>
                                    <TruncatedText text={car.car_features} maxLength={31} />
                                </div>

                                <div className="mt-2">
                                    <div className="text-gray-500">Price</div>
                                    <div>
                                        {car.price > 0 ? (
                                            <b className="text-xl text-green-600">${car.price / 100}/Wk</b>
                                        ) : (
                                            <b className="text-gray-400 text-sm">Pricing not available</b>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-col space-y-2">
                                    {car.status === "active" ? (
                                        <button
                                            className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
                                            onClick={() => handleViewButtonClick(car)}
                                        >
                                            View
                                        </button>
                                    ) : (
                                        <div className="flex space-x-2">
                                            <button
                                                className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
                                                onClick={() => handleViewButtonClick(car)}
                                            >
                                                View
                                            </button>
                                            {/* <button
                                                className="bg-gray-600 text-white py-2 px-4 rounded-lg w-full"
                                                onClick={() => handleViewButtonClick(car)}
                                            >
                                                Notify Me
                                            </button> */}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <MyPagination
                        totalPages={Math.ceil(filteredCars.length / itemsPerPage)}
                        current={page}
                        onChangePage={handleChangePage}
                    />
                </div>
            )}
        </div>
    );
};

export default Plans;