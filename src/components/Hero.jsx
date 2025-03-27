import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] mt-35">
      <div className="absolute">
        <img
          src="/images/hotel.jpeg"
          alt="Luxury hotel with swimming pool"
          className="opacity-90"
        />
      </div>

      <div className="absolute top-22 left-40 text-white z-10 max-w-xl">
        <h1 className="text-5xl font-bold mb-4 leading-14">
          Spend{" "}
          <span className="text-amber-500">
            Quality <br /> Holidays
          </span>{" "}
          With Us
        </h1>
        <p className="mb-6 leading-7 text-[16px] w-[380px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet justo ac odio convallis tristique. Honcus nunc, ut vestibulum
          justo purus nec integer.
        </p>
        <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition duration-300">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
