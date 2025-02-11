// Summary.tsx
import React from "react";
import moment from "moment";
import { useAppContext } from "@/utils/AppContext";
import { SummaryProps } from "@/utils/types";
const Summary: React.FC<SummaryProps> = ({ selectedPrice, date, time }) => {
    const { isUSA } = useAppContext();

    const { timeZone, depositAmount } = isUSA 
        ? { timeZone: 'EST', depositAmount: '$200' } 
        : { timeZone: 'AWST', depositAmount: '$500' };

    const formatDateTime = (date: string | null, time: string | null): string => {
        if (!date || !time) return 'Time and date not available';
        
        try {
            const timeRangeStart = time.split(' - ')[0];
            const dateTime = moment(date)
                .set({
                    hour: moment(timeRangeStart, 'hh:mm A').hour(),
                    minute: moment(timeRangeStart, 'hh:mm A').minute()
                })
                .subtract(1, 'hours');
                
            return dateTime.format(`MM/DD/YYYY hh:mm A ${timeZone}`);
        } catch (error) {
            console.error('Error formatting date/time:', error);
            return 'Invalid date/time format';
        }
    };

    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-[980px] mx-auto">
            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
            
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span>Rental Duration:</span>
                    <span>One {selectedPrice.interval} recurring</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Price per {selectedPrice.interval}:</span>
                    <span>${selectedPrice.price}</span>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h6 className="font-semibold">First Automatic Subscription Charge on:</h6>
                        <p className="text-sm text-gray-400">*First payment is scheduled one hour before pickup time*</p>
                    </div>
                    <span className="text-right">{formatDateTime(date, time)}</span>
                </div>
            </div>
            
            <hr className="border-gray-600 my-6" />
            
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h6 className="font-semibold">One Time Refundable Deposit:</h6>
                    <h6>{depositAmount}</h6>
                </div>
                <div className="flex justify-between items-center">
                    <h6 className="font-semibold">Sales Tax:</h6>
                    <h6>$0</h6>
                </div>
            </div>
            
            <hr className="border-gray-600 my-6" />
            
            <div className="flex justify-between items-center text-lg font-semibold">
                <h5>Due Today:</h5>
                <h5>{depositAmount}</h5>
            </div>
        </div>
    );
};

export default Summary;