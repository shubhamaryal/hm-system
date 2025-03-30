import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] mt-35">
      <div className="absolute w-full h-full">
        <img
          src="/images/hotel.jpeg"
          alt="Luxury hotel with swimming pool"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="absolute top-22 left-4 sm:left-20 md:left-40 text-white z-10 max-w-xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-14">
          Spend{" "}
          <span className="text-amber-500">
            Quality <br /> Holidays
          </span>{" "}
          With Us
        </h1>
        <p className="mb-6 leading-7 text-[16px] w-full sm:w-[380px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet justo ac odio convallis tristique. Honcus nunc, ut vestibulum
          justo purus nec integer.
        </p>
        <Link to="/rooms" className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition duration-300">
          Reserve Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
