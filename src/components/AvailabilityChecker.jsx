import { useState } from "react";

const AvailabilityChecker = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[580px] w-full max-w-[856px] h-auto sm:h-[80px] bg-[#F4DEC1] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 sm:py-0">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
        <div className="w-full sm:flex-1">
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            placeholder="Check-in Date"
            className="w-full p-2 border-none bg-white text-gray-800 focus:outline-none"
          />
        </div>
        <div className="w-full sm:flex-1">
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            placeholder="Check-out Date"
            className="w-full p-2 border-none bg-white text-gray-800 focus:outline-none"
          />
        </div>
        <div className="w-full sm:flex-1">
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="w-full p-2 border-none bg-white text-gray-800 focus:outline-none"
          >
            <option value="" disabled>
              Adults
            </option>
            {[...Array(6)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:flex-1">
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="w-full p-2 border-none bg-white text-gray-800 focus:outline-none"
          >
            <option value="" disabled>
              Children
            </option>
            {[...Array(6)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-amber-500 border border-amber-500 transition duration-300">
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityChecker;
