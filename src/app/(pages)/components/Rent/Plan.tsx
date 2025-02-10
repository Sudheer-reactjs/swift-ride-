"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TruncatedText from "@/components/TruncatedText";
import MyPagination from "@/components/MyPagination";
import Image from "next/image";

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

  const itemsPerPage = 12;

  useEffect(() => {
    // Define different static car lists for different packageIds
    const carDataByPackage: { [key: number]: Car[] } = {
      1: [
        {
          id: 1,
          make: "Toyota",
          model: "Corolla",
          year: "2020",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features:
            "Air conditioning, Bluetooth Air conditioning, Bluetooth",
          price: 100,
          img_url: "/assets/product-image.png",
          status: "active",
          country: "US",
          vin: "1234567890",
        },
      ],
      2: [
        {
          id: 2,
          make: "Honda",
          model: "Civic",
          year: "2021",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Leather seats, Sunroof Air conditioning, Bluetooth",
          price: 150,
          img_url: "https://via.placeholder.com/150",
          status: "inactive",
          country: "US",
          vin: "0987654321",
        },
        {
          id: 3,
          make: "Ford",
          model: "Focus",
          year: "2022",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Cruise control, Backup camera",
          price: 120,
          img_url: "https://via.placeholder.com/150",
          status: "active",
          country: "US",
          vin: "1122334455",
        },
      ],
      3: [
        {
          id: 4,
          make: "Honda",
          model: "Civic",
          year: "2021",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Leather seats, Sunroof Air conditioning, Bluetooth",
          price: 150,
          img_url: "https://via.placeholder.com/150",
          status: "inactive",
          country: "US",
          vin: "0987654321",
        },
        {
          id: 5,
          make: "Ford",
          model: "Focus",
          year: "2022",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features:
            "Cruise control, Backup camera Air conditioning, Bluetooth",
          price: 120,
          img_url: "https://via.placeholder.com/150",
          status: "active",
          country: "US",
          vin: "1122334455",
        },
        {
          id: 6,
          make: "Honda",
          model: "Civic",
          year: "2021",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Leather seats, Sunroof Air conditioning, Bluetooth",
          price: 150,
          img_url: "https://via.placeholder.com/150",
          status: "inactive",
          country: "US",
          vin: "0987654321",
        },
        {
          id: 7,
          make: "Ford",
          model: "Focus",
          year: "2022",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Cruise control, Backup camera",
          price: 120,
          img_url: "https://via.placeholder.com/150",
          status: "active",
          country: "US",
          vin: "1122334455",
        },
        {
          id: 8,
          make: "BMW",
          model: "X5",
          year: "2023",
          car_basics: "5 seats • 4 doors • Gas • 26 MPG",
          car_features: "Heated seats, Navigation",
          price: 250,
          img_url: "https://via.placeholder.com/150",
          status: "active",
          country: "US",
          vin: "9988776655",
        },
      ],
    };

    setAvailableCars(carDataByPackage[packageId] || []);
  }, [packageId]);

  useEffect(() => {
    let cars = availableCars;

    if (filter === "active") {
      cars = cars.filter((car) => car.status === "active");
    } else if (filter === "inactive") {
      cars = cars.filter((car) => car.status === "inactive");
    }

    setFilteredCars(cars);
    setPage(1);
  }, [availableCars, filter]);

  const handleViewButtonClick = useCallback(
    (car: Car) => {
      const params = new URLSearchParams(searchParams);
      params.set("packageId", packageId.toString());
      params.set("vin", car.vin);

      // Use the correct route format
      router.push(`/details?${params.toString()}`);
    },
    [router, packageId, searchParams]
  );

  const handleChangePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  const currentCars = filteredCars.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      {filteredCars.length === 0 ? (
        <div className="mt-6 text-x">
          Sorry, no cars currently available under this plan. Please check back
          later.
        </div>
      ) : (
        <div>
          <div className="pt-2 pb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {currentCars.map((car) => (
              <div key={car.id} className="bg-[#1D2125] prodcut-card relative">
                {car.status === "active" ? (
                  <span className="available-car">Available</span>
                ) : (
                  <span className="unavailable-car">Unavailable</span>
                )}

                <Image
                  src="/assets/product-image.png"
                  layout="intrinsic"
                  alt={`${car.make} ${car.model}`}
                  width={334}
                  height={201}
                  className="w-full"
                />

                <h3 className="text-[#57E667]">
                  {car.make} {car.model} {car.year}
                </h3>
                <div className="flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[8px]">
                    <div className="">Car Basics</div>
                    <div>{car.car_basics}</div>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="">Features</div>
                    <TruncatedText text={car.car_features} maxLength={25} />
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="">Price</div>
                    <div>
                      {car.price > 0 ? (
                        <b className="text-[20px]">${car.price / 100}/Wk</b>
                      ) : (
                        <b className="text-sm">Pricing not available</b>
                      )}
                    </div>
                  </div>
                </div>
                <div className="plan flex flex-col space-y-2">
                  {packageId === 3 ? (
                    <button
                      className="plan-button"
                      onClick={() => handleViewButtonClick(car)}
                    >
                      <span className="gradient-text">View</span>
                    </button>
                  ) : (
                    <button
                      className="plan-button"
                      disabled
                    >
                      <span className="gradient-text"> Notify Me </span>
                    </button>
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
