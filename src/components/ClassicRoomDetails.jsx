import RoomCard from "./RoomCard";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

function getRatingDetails(rating) {
  let ratingColor;
  let ratingText;
  let ratingBg;

  if (rating > 4.5) {
    ratingColor = "text-green-500";
    ratingBg = "bg-green-100";
    ratingText = "Excellent";
  } else if (rating > 4) {
    ratingColor = "text-blue-500";
    ratingBg = "bg-blue-100";
    ratingText = "Good";
  } else {
    ratingColor = "text-orange-500";
    ratingBg = "bg-orange-100";
    ratingText = "Average";
  }

  return { ratingColor, ratingText, ratingBg };
}

const hotelRooms = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    title: "Solo Retreat",
    occupancy: "1 Adult",
    rating: 3,
    amenities: [
      { icon: "wifi", text: "Free Wifi" },
      { icon: "bed", text: "1x Single Bed" },
      { icon: "bath", text: "1x Modest Bathroom" },
    ],
    price: "999",
    reviews: "128",
    available: true,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
    title: "Classic Queen",
    occupancy: "2 Adults",
    rating: 4.8,
    amenities: [
      { icon: "wifi", text: "Free Wifi" },
      { icon: "bed", text: "1x Queen Bed" },
      { icon: "bath", text: "1x Modest Bathroom" },
    ],
    price: "999",
    reviews: "128",
    available: false,
  },
  // Add available property to other rooms as well
  {
    imageUrl:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
    title: "Family Suite",
    occupancy: "4 Adults",
    rating: 3.5,
    amenities: [
      { icon: "wifi", text: "Premium Wifi" },
      { icon: "bed", text: "2x King Beds" },
      { icon: "bath", text: "2x Ensuite Bathrooms" },
    ],
    price: "2499",
    reviews: "189",
    available: true,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
    title: "Family Suite",
    occupancy: "4 Adults",
    rating: 4.7,
    amenities: [
      { icon: "wifi", text: "Premium Wifi" },
      { icon: "bed", text: "2x King Beds" },
      { icon: "bath", text: "2x Ensuite Bathrooms" },
    ],
    price: "2499",
    reviews: "189",
    available: false,
  },
];

function ClassicRoomDetails() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate("/rooms");
  };

  const handleReserveClick = (room) => {
    const { ratingText, ratingColor, ratingBg } = getRatingDetails(room.rating);

    navigate(
      `/rooms/reserve/${room.title.replace(/\s+/g, "-").toLowerCase()}`,
      {
        state: {
          room: {
            ...room,
            ratingText,
            ratingColor,
            ratingBg,
          },
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between mx-4 sm:mx-20 md:mx-90 mt-18 pt-20">
        <MoveLeft
          onClick={handleArrowClick}
          className="scale-150 sm:scale-200 cursor-pointer hover:text-amber-400"
        />
        <div className="text-3xl sm:text-4xl md:text-5xl text-gray-600">
          <span className="text-amber-500">Classic</span> Rooms
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-start p-4 gap-6 mt-16">
        {hotelRooms.map((room, index) => {
          const { ratingColor, ratingText, ratingBg } = getRatingDetails(
            room.rating
          );

          return (
            <RoomCard
              key={index}
              {...room}
              ratingColor={ratingColor}
              ratingText={ratingText}
              ratingBg={ratingBg}
              handleReserveClick={() => handleReserveClick(room)}
            />
          );
        })}
      </div>
    </>
  );
}

export default ClassicRoomDetails;
