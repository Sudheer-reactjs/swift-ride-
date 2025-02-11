// Summary.tsx
import React from "react";
import moment from "moment";
import { useAppContext } from "@/utils/AppContext";
import { SummaryProps } from "@/utils/types";
const Summary: React.FC<SummaryProps> = ({ selectedPrice, date, time }) => {
  const { isUSA } = useAppContext();

  const { timeZone, depositAmount } = isUSA
    ? { timeZone: "EST", depositAmount: "$200" }
    : { timeZone: "AWST", depositAmount: "$500" };

  const formatDateTime = (date: string | null, time: string | null): string => {
    if (!date || !time) return "Time and date not available";

    try {
      const timeRangeStart = time.split(" - ")[0];
      const dateTime = moment(date)
        .set({
          hour: moment(timeRangeStart, "hh:mm A").hour(),
          minute: moment(timeRangeStart, "hh:mm A").minute(),
        })
        .subtract(1, "hours");

      return dateTime.format(`MM/DD/YYYY hh:mm A ${timeZone}`);
    } catch (error) {
      console.error("Error formatting date/time:", error);
      return "Invalid date/time format";
    }
  };

  return (
    <div className="w-full block">
      <div className="container !max-w-[980px]">
        <div className="bg-[#1D2125] p-[24px] rounded-[12px] ">
          <h3 className=" text-[#57E667]">Payment Summary</h3>

          <div className="space-y-4 mt-[24px]">
            <div className="flex justify-between items-center">
              <span className="opacity-60">Rental Duration</span>
              <span>One {selectedPrice.interval} recurring</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="opacity-60">Price per {selectedPrice.interval}:</span>
              <span>${selectedPrice.price}</span>
            </div>
            <div className="flex justify-between flex-col gap-3 md:gap-0 md:flex-row items-start">
              <div>
                <p className="text-[#57E667]">
                  First Automatic Subscription Charge on:
                </p>
                <p className="text-[14px] mt-1">
                  *First payment is scheduled one hour before pickup time*
                </p>
              </div>
              <span className="text-right">{formatDateTime(date, time)}</span>
            </div>
          </div>

          <hr className="border-white opacity-10 my-6" />

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="opacity-60">One Time Refundable Deposit:</span>
              <p>{depositAmount}</p>
            </div>
            <div className="flex justify-between items-center">
            <span className="opacity-60">Sales Tax:</span>
              <p>$0</p>
            </div>
          </div>

          <hr className="border-white opacity-10 my-6" />

          <div className="flex justify-between items-center text-lg font-semibold">
            <span className="text-[#57E667] italic">Due Today:</span>
            <h5>{depositAmount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
