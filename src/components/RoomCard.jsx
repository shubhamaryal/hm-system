import { Wifi, Bed, Bath } from "lucide-react";

function RoomCard({
  imageUrl,
  title,
  occupancy,
  rating,
  amenities,
  price,
  reviews,
  handleReserveClick,
  ratingText,
  ratingColor,
  ratingBg,
}) {
  const getAmenityIcon = (icon) => {
    switch (icon) {
      case "wifi":
        return <Wifi className="w-5 h-5 mr-3" />;
      case "bed":
        return <Bed className="w-5 h-5 mr-3" />;
      case "bath":
        return <Bath className="w-5 h-5 mr-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_0_30px_rgba(156,163,175,1)] hover:shadow-[0_0_20px_rgba(234,179,8,0.7)] duration-300 transition-shadow overflow-hidden max-w-[1100px] w-full mb-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={`${title} room view`}
            className="p-6 h-auto w-full md:h-80 md:w-130 object-cover"
          />
        </div>

        <div className="md:w-3/5 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
              <p className="text-gray-500 mt-1">{occupancy}</p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex flex-col items-end">
                <span className={`${ratingColor} font-medium`}>
                  {ratingText}
                </span>
                <p className="text-sm text-gray-500">{reviews} reviews</p>
              </div>
              <div
                className={`flex items-center ml-3 ${ratingBg} px-4 py-1 rounded-xl`}
              >
                <span className={`${ratingColor} font-semibold`}>{rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-800">Comfort Room</h3>
            <div className="mt-2">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-600">
                  {getAmenityIcon(amenity.icon)}
                  <span>{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
            <div className="mb-2 sm:mb-0">
              <span className="text-2xl font-bold text-gray-800">
                Rs. {price}
              </span>
              <span className="text-gray-600">/ night</span>
            </div>
            <button
              onClick={handleReserveClick}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg cursor-pointer font-medium hover:bg-gray-700 transition-colors"
            >
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
