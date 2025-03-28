import React from "react";

const Details = ({ number, title, image }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`${title} hotel room`}
              className="w-130 h-70 object-cover rounded-3xl"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex items-start space-x-28">
          <span className="text-5xl text-black font-light">{number}</span>
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-3xl text-gray-700 font-semibold">{title}</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-amber-400 hover:text-amber-500">
              {/* need to replace this with arrow */}
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="border-1 border-amber-100 mb-8"></div>
    </>
  );
};

const RoomList = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl mt-36">
      <div className="flex flex-col md:flex-row gap-12 mb-26">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-light">
            <span className="text-amber-400">Comfortable</span> Rooms
          </h2>
          <h3 className="text-4xl md:text-5xl font-light mt-2">
            Just For <span className="text-amber-400">You</span>
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-700 text-lg mb-6 leading-relaxed w-[80%]">
            Experience comfort and elegance with our thoughtfully designed hotel
            rooms. Each space blends style and functionality, offering a
            relaxing stay with modern amenities to ensure a memorable
            experience.
          </p>
          <div>
            <a
              href="#"
              className="text-lg text-amber-400 hover:text-amber-500 transition-colors"
            >
              More Info
            </a>
          </div>
        </div>
      </div>

      <Details number="01" title="Classic" image="/room-type/classic.jpeg" />
      <Details number="02" title="Deluxe" image="/room-type/delux.jpeg" />
      <Details number="03" title="Suite" image="/room-type/suite.jpeg" />
    </div>
  );
};

export default RoomList;
