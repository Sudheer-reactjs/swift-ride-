import React, { useEffect } from "react";

interface BookingTimePickerProps {
  openTimeModal: boolean;
  setOpenTimeModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
}

const BookingTimePicker: React.FC<BookingTimePickerProps> = ({
  openTimeModal,
  setOpenTimeModal,
  selectedTime,
  setSelectedTime,
}) => {
  // Array for times
  const times = [
    "09:00 am - 10:00 am",
    "10:00 am - 11:00 am",
    "11:00 am - 12:00 pm",
    "12:00 pm - 01:00 pm",
    "01:00 pm - 02:00 pm",
    "02:00 pm - 03:00 pm",
    "03:00 pm - 04:00 pm",
    "04:00 pm - 05:00 pm",
    "05:00 pm - 06:00 pm",
    "06:00 pm - 07:00 pm",
  ];

  // Close the modal when clicking outside the modal
  const handleModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setOpenTimeModal(false);
    }
  };

  // Disable body scroll when modal is open
  useEffect(() => {
    if (openTimeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openTimeModal]);

  return (
    <div
      className={`fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        openTimeModal ? "block" : "hidden"
      }`}
      onClick={handleModalClose}
    >
      <div className="bg-[#1D2125] p-6 shadow-lg max-w-[450px] w-[94%] rounded-[12px] select-feild overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Select Time</h2>

        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="form-select w-full"
        >
          <option value="" disabled>
            Select an hour
          </option>
          {times.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => setOpenTimeModal(false)}
            className="cancel-button"
          >
            Close
          </button>
          <button
            onClick={() => setOpenTimeModal(false)}
            className="save-button"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingTimePicker;
