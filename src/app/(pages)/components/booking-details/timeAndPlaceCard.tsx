"use client";
import React, { useState } from "react";
import { format } from "date-fns"; // Use date-fns for formatting
import BookingTimePicker from "./BookingTimePicker"; // Import the new component
import BookingDatePicker from "./BookingDatePicker";
import {
  TimeIcon,
  CalendarIcon,
  CardLocationIcon,
  CardCallIcon,
  CardArrowIcon,
} from "@/lib/svg";
import SubscriptionDuration from "./SubscriptionDuration";

const TimeAndPlaceCard = () => {
  const [openDateModal, setOpenDateModal] = useState(false);
  const [openTimeModal, setOpenTimeModal] = useState(false); // Add state for time modal
  const [date, setDate] = useState<Date | null>(new Date()); // Allow null
  const [time, setTime] = useState<string>(""); // Store time as a string to display formatted time
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [userHasTyped, setUserHasTyped] = useState(false);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    return format(date, "MMMM d, yyyy"); // Use date-fns to format date
  };

  const formatTime = (time: string) => {
    if (!time) return "Please Select";
    return time; // Simply return the formatted time directly
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);

    // Validate the phone number (basic check for length)
    const phonePattern = /^[0-9]{10}$/;
    setIsPhoneValid(phonePattern.test(value));
    setUserHasTyped(true);
  };

  const handleBlur = () => {
    if (!phoneNumber) {
      setIsPhoneValid(false); // Mark as invalid if no value is provided
    }
  };

  return (
    <div className="time-place pt-[60px]">
      <div className="container !max-w-[980px]">
        <div className="bg-[#1D2125] p-[24px] rounded-[12px]">
          <h3 className="text-[#57E667] mb-[24px]">Time and Place</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[49%_51%] ">
            <div className="pb-[32px] lg:pr-[60px] lg:pb-[0]  space-y-[16px] md:space-y-[24px]">
              <p className="opacity-60">Pick Up</p>
              {/* Date Card */}
              <div className="flex items-center card-info justify-between rounded-lg gap-3 p-[12px]">
                <div className=" flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-[#fff] opacity-[0.6] font-light">Date</p>
                    <p className="text-white m-0">{formatDate(date)}</p>
                  </div>
                </div>

                <div className=" flex justify-center items-center">
                  <button
                    className="gradient-text cursor-pointer"
                    onClick={() => setOpenDateModal(true)}
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Time Card */}
              <div className="flex items-center card-info justify-between rounded-lg gap-3 p-[12px]">
                <div className=" flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <TimeIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm m-0">Time</p>
                    <p className="text-white m-0">{formatTime(time)}</p>
                  </div>
                </div>

                <div className=" flex justify-center items-center">
                  <button
                    className="gradient-text cursor-pointer"
                    onClick={() => setOpenTimeModal(true)}
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Phone Number Card */}
              <div className="flex items-center card-info justify-between rounded-lg gap-3 p-[12px]">
                <div className=" flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <CardCallIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm m-0">Phone Number</p>
                    <input
                      type="text"
                      placeholder="10-digit No"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      onBlur={handleBlur}
                      className={`mt-1 text-white light-grey-placeholder rounded-[6px] p-2 w-full ${
                        !isPhoneValid && userHasTyped
                          ? "border-red-500"
                          : "border-white"
                      }`}
                      style={{
                        background: "transparent",
                        borderWidth: "1px",
                        borderColor:
                          isPhoneValid || !userHasTyped ? "#fff " : "red",
                      }}
                    />
                    {!isPhoneValid && userHasTyped && (
                      <div style={{ color: "red" }} className="text-sm mt-1">
                        Invalid phone number
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-center card-info justify-between rounded-lg gap-3 p-[12px]">
                <div className=" flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <CardLocationIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm m-0">Pick Up Address</p>
                    <p className="text-white m-0">
                      128B Kewdale Road, Kewdale WA 6105
                    </p>
                  </div>
                </div>

                <div className=" flex justify-center items-center">
                  <button className="gradient-text cursor-pointer">
                    <CardArrowIcon />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <SubscriptionDuration
                interval="monthly"
                distanceUnit="km"
                effectiveRadius="100"
                isUSA={false}
                insuranceEffectiveArea="Perth"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Use the BookingDatePicker component */}
      <BookingDatePicker
        openDateModal={openDateModal}
        setOpenDateModal={setOpenDateModal}
        date={date}
        setDate={setDate}
      />

      {/* Use the BookingTimePicker component */}
      <BookingTimePicker
        openTimeModal={openTimeModal}
        setOpenTimeModal={setOpenTimeModal}
        selectedTime={time} // Pass the selected time here
        setSelectedTime={setTime} // Pass the setSelectedTime function here
      />
    </div>
  );
};

export default TimeAndPlaceCard;
