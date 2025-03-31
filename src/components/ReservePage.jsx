import { useState } from "react";
import NavBar from "./NavBar";
import { MoveLeft, Check, Wifi, Bed, Bath } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ReservePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const room = location.state?.room;

  const [activeTab, setActiveTab] = useState("overview");

  const handleBack = () => {
    navigate(-1);
  };

  const getAmenityIcon = (icon, size = 20) => {
    switch (icon) {
      case "wifi":
        return <Wifi className="text-black" size={size} />;
      case "bed":
        return <Bed className="text-black" size={size} />;
      case "bath":
        return <Bath className="text-black" size={size} />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen pt-20 bg-gray-100">
        <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-18 ml-4 sm:ml-84">
          <button
            onClick={handleBack}
            className="text-black hover:text-amber-500 transition-colors"
          >
            <MoveLeft className="cursor-pointer" size={46} />
          </button>
        </div>

        <div className="flex flex-col w-full max-w-full md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto px-4 md:px-8 mb-20">
          <div
            className={`inline-block ${
              room.available ? "bg-green-500" : "bg-red-500"
            } text-white px-3 py-1 rounded-t-xl text-sm font-medium w-fit mb-0 z-10`}
          >
            {room.available ? "Available" : "Unavailable"}
          </div>

          <div className="bg-white shadow-sm overflow-hidden -mt-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-8 pt-6 sm:pt-10 gap-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                {room.title}
              </h1>
              <button
                className={`${
                  room.available
                    ? "bg-orange-400 hover:bg-orange-500"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white px-4 py-2 sm:py-3 rounded-md transition-colors text-base sm:text-lg w-full sm:w-auto`}
                disabled={!room.available}
                onClick={() => {
                  if (room.available) {
                    navigate(
                      `/rooms/${room.roomType}/${room.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}/booking`,
                      {
                        state: { room },
                      }
                    );
                  }
                }}
              >
                {room.available ? "Book Now" : "Not Available"}
              </button>
            </div>

            <div className="grid grid-cols-12 gap-4 px-8 pb-8">
              <div className="col-span-12 md:col-span-6 h-[350px] md:h-[400px] relative rounded-lg overflow-hidden">
                <img
                  src={room.imageUrl || "/placeholder.svg"}
                  alt={`${room.title} main view`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4 h-[350px] md:h-[400px]">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                    alt="Hotel room view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Bathroom view"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative col-span-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1244&q=80"
                    alt="City skyline view"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="px-8 pb-8 mt-8 text-gray-300">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b">
                <div className="flex flex-wrap">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`text-base sm:text-lg md:text-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 ${
                      activeTab === "overview"
                        ? "border-b-2 border-amber-400 text-amber-400 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("amenities")}
                    className={`text-base sm:text-lg md:text-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 ${
                      activeTab === "amenities"
                        ? "border-b-2 border-amber-400 text-amber-400 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    Amenities
                  </button>
                  <button
                    onClick={() => setActiveTab("policies")}
                    className={`text-base sm:text-lg md:text-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 ${
                      activeTab === "policies"
                        ? "border-b-2 border-amber-400 text-amber-400 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    Policies
                  </button>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
                  <div className="text-right">
                    <div className={`${room.ratingColor} font-medium text-lg`}>
                      {room.ratingText}
                    </div>
                    <div className="text-sm text-gray-600">
                      {room.reviews} reviews
                    </div>
                  </div>
                  <div
                    className={`${room.ratingBg} ${room.ratingColor.replace(
                      "text",
                      "text"
                    )} font-bold rounded-2xl flex items-center px-4 py-2 justify-center text-lg`}
                  >
                    {room.rating}
                  </div>
                </div>
              </div>

              <div className="pt-8">
                {activeTab === "overview" && (
                  <p className="text-gray-800 text-base sm:text-lg w-full md:w-[70%] lg:w-[50%] xl:w-[35%]">
                    This elegantly designed room is ideal for{" "}
                    {room.occupancy.toLowerCase()}, featuring a spacious{" "}
                    {room.amenities
                      .find((a) => a.icon === "bed")
                      ?.text.replace("1x ", "")}{" "}
                    for a restful stay. Set within a well-arranged space, it
                    offers standard with stylish furnishings and essential
                    amenities for a relaxing experience.
                  </p>
                )}

                {activeTab === "amenities" && (
                  <div className="text-gray-800 text-lg">
                    <h3 className="font-medium mb-3 text-xl">Room Amenities</h3>
                    <ul className="space-y-3 pl-6">
                      {room.amenities.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          {getAmenityIcon(amenity.icon)}
                          <span>{amenity.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "policies" && (
                  <div className="text-gray-800 text-lg">
                    <h3 className="font-medium mb-3 text-xl">
                      Booking Policies
                    </h3>
                    <ul className="pl-6 space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <Check className="text-black" size={20} />
                        Cancellation: Free up to 24 hours before arrival
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <Check className="text-black" size={20} />
                        Payment: Credit Card, PayPal, Cash (taxes may apply)
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <Check className="text-black" size={20} />
                        Smoking: In-room smoking permitted with ashtray provided
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <Check className="text-black" size={20} />
                        Pets: Not allowed
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservePage;
