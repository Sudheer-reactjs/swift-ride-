"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import BookingTimePicker from "./BookingTimePicker";
import BookingDatePicker from "./BookingDatePicker";
import {
  TimeIcon,
  CalendarIcon,
  CardLocationIcon,
  CardCallIcon,
  CardArrowIcon,
} from "@/lib/svg";
import SubscriptionDuration from "./SubscriptionDuration";

interface TimeAndPlaceCardProps {
  onDateChange: Dispatch<SetStateAction<string | null>>;
  onTimeChange: Dispatch<SetStateAction<string | null>>;
}

const TimeAndPlaceCard: React.FC<TimeAndPlaceCardProps> = ({ onDateChange, onTimeChange }) => {
  const [openDateModal, setOpenDateModal] = useState(false);
  const [openTimeModal, setOpenTimeModal] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [userHasTyped, setUserHasTyped] = useState(false);

  // Function to notify parent of date changes
  const notifyDateChange = (newDate: Date | null) => {
    if (newDate) {
      const formattedDate = format(newDate, "MMMM d, yyyy");
      onDateChange(formattedDate);
    } else {
      onDateChange(null);
    }
  };

  // Function to notify parent of time changes
  const notifyTimeChange = (newTime: string) => {
    onTimeChange(newTime || null);
  };

  // Create wrapper functions that maintain the correct Dispatch type
  const handleDateChange: Dispatch<SetStateAction<Date | null>> = (value) => {
    const newDate = typeof value === 'function' ? value(date) : value;
    setDate(newDate);
    notifyDateChange(newDate);
  };

  const handleTimeChange: Dispatch<SetStateAction<string>> = (value) => {
    const newTime = typeof value === 'function' ? value(time) : value;
    setTime(newTime);
    notifyTimeChange(newTime);
  };

  const getFormattedDate = () => {
    if (!date) return "";
    return format(date, "MMMM d, yyyy");
  };

  const getFormattedTime = () => {
    if (!time) return "Please Select";
    return time;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
    const phonePattern = /^[0-9]{10}$/;
    setIsPhoneValid(phonePattern.test(value));
    setUserHasTyped(true);
  };

  const handleBlur = () => {
    if (!phoneNumber) {
      setIsPhoneValid(false);
    }
  };

  return (
    <div className="time-place pt-[60px]">
      <div className="container !max-w-[980px]">
        <div className="bg-[#1D2125] p-[24px] rounded-[12px]">
          <h3 className="text-[#57E667] mb-[24px]">Time and Place</h3>
          <div className="grid grid-cols-1 lg:grid-cols-[49%_51%] ">
            <div className="pb-[32px] lg:pr-[60px] lg:pb-[0] space-y-[16px] md:space-y-[24px]">
              <p className="opacity-60">Pick Up</p>
              {/* Date Card */}
              <div className="flex items-center card-info justify-between rounded-lg gap-3 p-[12px]">
                <div className="flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <CalendarIcon />
                  </div>
                  <div>
                    <p className="text-[#fff] opacity-[0.6] font-light">Date</p>
                    <p className="text-white m-0">{getFormattedDate()}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
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
                <div className="flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <TimeIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm m-0">Time</p>
                    <p className="text-white m-0">{getFormattedTime()}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
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
                <div className="flex justify-center gap-3">
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
                        !isPhoneValid && userHasTyped ? "border-red-500" : "border-white"
                      }`}
                      style={{
                        background: "transparent",
                        borderWidth: "1px",
                        borderColor: isPhoneValid || !userHasTyped ? "#fff" : "red",
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
                <div className="flex justify-center gap-3">
                  <div className="flex justify-center items-center">
                    <CardLocationIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm m-0">Pick Up Address</p>
                    <p className="text-white m-0">128B Kewdale Road, Kewdale WA 6105</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
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

      <BookingDatePicker
        openDateModal={openDateModal}
        setOpenDateModal={setOpenDateModal}
        date={date}
        setDate={handleDateChange}
      />

      <BookingTimePicker
        openTimeModal={openTimeModal}
        setOpenTimeModal={setOpenTimeModal}
        selectedTime={time}
        setSelectedTime={handleTimeChange}
      />
    </div>
  );
};

export default TimeAndPlaceCard;