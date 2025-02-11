"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

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

const RentHero = () => {
  const [car, setCar] = useState<Car | null>(null);
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const mockCarData: { [key: string]: Car } = {
      "1234567890": {
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
        vin: "1234567890",
      },
      "0987654321": {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: "2021",
        car_basics: "5 seats • 4 doors • Gas • 26 MPG",
        car_features: "Leather seats, Sunroof, Air conditioning, Bluetooth",
        price: 150,
        img_url: "/assets/product-image.png",
        status: "inactive",
        country: "US",
        vin: "0987654321",
      },
      "1122334455": {
        id: 3,
        make: "Ford",
        model: "Focus",
        year: "2022",
        car_basics: "5 seats • 4 doors • Gas • 26 MPG",
        car_features: "Cruise control, Backup camera, Air conditioning, Bluetooth",
        price: 120,
        img_url: "/assets/product-image.png",
        status: "active",
        country: "US",
        vin: "1122334455",
      },
    };

    const vin = searchParams.get("vin");
    if (vin && mockCarData[vin]) {
      setCar(mockCarData[vin]);
    }
  }, [searchParams]);

  const radioOptions = [
    { id: 1, interval: "day", price: 49 },
    { id: 2, interval: "week", price: 380 },
  ];

  const handleContinue = () => {
    if (!selectedOption || !car) return;

    // Get the selected price option
    const selectedPrice = radioOptions.find(
      (option) => option.id === selectedOption
    );

    // Navigate to booking details page with state
    router.push(
      `/booking-details?vin=${car.vin}&packageId=${localStorage.getItem(
        "packageId"
      )}&selectedPrice=${selectedPrice?.price}&interval=${
        selectedPrice?.interval
      }`
    );
  };

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
      <div className="block w-full mb-[24px] product-page">
        <div className="container ">
          <p className="large-text mb-[8px]">{car.year}</p>
          <h1 >{car.make}</h1>
        </div>
      </div>
      <div className="container">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[51%_49%] gap-[32px]">
            <div className="relative">
              <div className="iframe-container rounded-corners">
              <iframe
                  src="https://www.glo3d.net/iframeNova/mj7pQ5SeZt"
                  title="360 car view"
                  className=" bg-gray-500 w-full"
                ></iframe>
              </div>
              <p className="text-center mt-[10px]">
                Swipe to interact with 3D model
              </p>
            </div>
            <div className="w-full block">
              <div className="space-y-[22px] md:space-y-[32px] max-w-[420px] w-full m-auto">
                <div className="flex flex-col gap-1 md:gap-4">
                    <h2 className="!text-[20px] md:!text-[30px]">Select your monthly plan</h2>
                    <p className="large-text">Insurance included. Change plans anytime.</p>
                </div>
                {/* Plan Selection */}
                <div className="max-w-2xl mx-auto flex flex-col gap-[32px]">
                  {radioOptions.map((option) => (
                    <div key={option.id} className="plan-selected">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          className="hidden"
                          onChange={() => setSelectedOption(option.id)}
                          value={option.id}
                          checked={selectedOption === option.id}
                        />
                        <div className="plan-selected-inner">
                          <div className="flex items-center cursor-pointer">
                            <div className="w-4 h-4 border-[1px] border-[#2C5436] border-solid rounded-full flex justify-center items-center">
                              {selectedOption === option.id && (
                                <div className="w-3 h-3 bg-gradient rounded-full"></div>
                              )}
                            </div>
                            <span className="ml-3">
                              {option.interval === "month"
                                ? "Daily Unlimited"
                                : "Weekly Unlimited"}
                            </span>
                          </div>
                          <p className="whitespace-nowrap">
                            ${option.price}/{option.interval}
                          </p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full button-gradient common-button !text-[18px] !px-[15px] !py-[11px] transition-colors ${
                    selectedOption ? "" : " cursor-not-allowed"
                  }`}
                  disabled={!selectedOption}
                  onClick={handleContinue}
                >
                  Continue to schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentHero;