import React from "react";
import { Wifi, Car, Bath, Star } from "lucide-react";

function RoomCard({
  imageUrl,
  title,
  occupancy,
  rating,
  amenities,
  price,
  reviews,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_0_30px_rgba(156,163,175,1)] hover:shadow-[0_0_20px_rgba(234,179,8,0.7)] duration-300 transition-shadow overflow-hidden max-w-[1100px] w-full mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-2/5">
          <img
            src={imageUrl}
            alt={`${title} room view`}
            className="p-6 h-80 w-130"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-500 mt-1">{occupancy}</p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-end">
                <span className="text-blue-600 font-medium">Good</span>

                <p className="text-sm text-gray-500">{reviews} reviews</p>
              </div>

              <div className="flex items-center ml-3 bg-blue-100 px-4 py-1 rounded-xl">
                <span className="text-blue-700 font-semibold">{rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-800">Comfort Room</h3>

            <div className="mt-2">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  {amenity.icon === "wifi" && <Wifi className="w-5 h-5 mr-3" />}
                  {amenity.icon === "bed" && <Car className="w-5 h-5 mr-3" />}
                  {amenity.icon === "bath" && <Bath className="w-5 h-5 mr-3" />}
                  <span>{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-800">
                Rs. {price}
              </span>
              <span className="text-gray-600">/ night</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
