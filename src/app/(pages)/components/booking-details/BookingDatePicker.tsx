// components/BookingDatePicker.tsx
import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingDatePickerProps {
  openDateModal: boolean;
  setOpenDateModal: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date | null;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const BookingDatePicker: React.FC<BookingDatePickerProps> = ({
  openDateModal,
  setOpenDateModal,
  date,
  setDate,
}) => {
  return (
    <Transition show={openDateModal} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpenDateModal(false)}>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Dialog.Panel className="bg-[#1D2125] p-6 shadow-lg max-w-[450px] w-[94%] rounded-[12px]">
            <Dialog.Title className="text-lg font-semibold mb-4">Select a Date</Dialog.Title>
            
            <DatePicker
              selected={date}
              onChange={(newDate: Date | null) => setDate(newDate)}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
              className="border p-2 rounded w-full"
            />

            <div className="flex justify-center mt-4 gap-2">
              <button
                className="cancel-button"
                onClick={() => setOpenDateModal(false)}
              >
                Cancel
              </button>
              <button
                className="save-button"
                onClick={() => setOpenDateModal(false)}
              >
                Select
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingDatePicker;
