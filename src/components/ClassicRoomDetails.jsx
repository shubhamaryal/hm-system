import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import { fetchAvailableRooms } from "../api/roomsApi";

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

const mapApiRoomToCardProps = (apiRoom) => {
  const rating =
    apiRoom.occupancy.maxOccupancy >= 4
      ? 4.8
      : apiRoom.occupancy.maxOccupancy >= 3
      ? 4.2
      : 3.8;

  const amenities = [
    { icon: "wifi", text: apiRoom.amenities.wifi ? "Free Wifi" : "No Wifi" },
    {
      icon: "bed",
      text: `${apiRoom.amenities.beds.king || 0}x King, ${
        apiRoom.amenities.beds.queen || 0
      }x Queen, ${apiRoom.amenities.beds.single || 0}x Single`,
    },
    { icon: "bath", text: `${apiRoom.amenities.bathrooms || 1}x Bathroom` },
  ];

  return {
    imageUrl:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800",
    title: apiRoom.roomName || "Room",
    occupancy: `${apiRoom.occupancy.adult || 0} Adults, ${
      apiRoom.occupancy.children || 0
    } Children`,
    rating: rating,
    amenities: amenities,
    price: apiRoom.price?.toString() || "0",
    reviews: "128",
    available: true,
    apiRoomId: apiRoom._id,
    roomNumber: apiRoom.roomNumber,
    description: apiRoom.description || "",
  };
};

function ClassicRoomDetails() {
  const roomType = "classic";
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setLoading(true);
        const roomData = await fetchAvailableRooms();

        const classicRooms = roomData.filter(
          (room) => room.roomType === "Classic" || room.roomType === "classic"
        );

        setRooms(classicRooms);
      } catch (err) {
        setError("Failed to load rooms. Please try again later.");
        console.error("Error in loadRooms:", err);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
  }, []);

  const handleArrowClick = () => {
    navigate("/rooms");
  };

  const handleReserveClick = (room) => {
    const { ratingText, ratingColor, ratingBg } = getRatingDetails(room.rating);

    navigate(
      `/rooms/${roomType}/${room.title.replace(/\s+/g, "-").toLowerCase()}`,
      {
        state: {
          room: {
            ...room,
            ratingText,
            ratingColor,
            ratingBg,
            roomType: "classic",
          },
        },
      }
    );
  };

  console.log("Current rooms state:", rooms);

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
        {loading && <div className="text-xl">Loading rooms...</div>}
        {error && <div className="text-xl text-red-500">{error}</div>}

        {!loading && !error && rooms.length === 0 && (
          <div className="text-xl">
            No Classic rooms available at the moment.
          </div>
        )}

        {!loading &&
          !error &&
          rooms.map((apiRoom, index) => {
            // Convert API room data to format expected by RoomCard
            const room = mapApiRoomToCardProps(apiRoom);
            const { ratingColor, ratingText, ratingBg } = getRatingDetails(
              room.rating
            );

            return (
              <RoomCard
                key={apiRoom._id || index}
                {...room}
                ratingColor={ratingColor}
                ratingText={ratingText}
                ratingBg={ratingBg}
                handleReserveClick={() =>
                  handleReserveClick({
                    ...room,
                    apiData: apiRoom,
                  })
                }
              />
            );
          })}
      </div>
    </>
  );
}

export default ClassicRoomDetails;
