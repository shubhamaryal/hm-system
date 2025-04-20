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
  const rating = 4.9;

  const amenities = [
    {
      icon: "wifi",
      text: apiRoom.amenities.wifi ? "Free Premium Wifi" : "No Wifi",
    },
    {
      icon: "bed",
      text: `${apiRoom.amenities.beds.king || 0}x King, ${
        apiRoom.amenities.beds.queen || 0
      }x Queen, ${apiRoom.amenities.beds.single || 0}x Single`,
    },
    {
      icon: "bath",
      text: `${apiRoom.amenities.bathrooms || 1}x Luxury Bathroom`,
    },
  ];

  return {
    imageUrl:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=800",
    title: apiRoom.roomName || "Luxury Suite",
    occupancy: `${apiRoom.occupancy.adult || 0} Adults, ${
      apiRoom.occupancy.children || 0
    } Children`,
    rating: rating,
    amenities: amenities,
    price: apiRoom.price?.toString() || "0",
    reviews: "218",
    available: true,
    apiRoomId: apiRoom._id,
    roomNumber: apiRoom.roomNumber,
    description: apiRoom.description || "",
  };
};

function SuiteRoomDetails() {
  const roomType = "suite";
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        setLoading(true);
        const roomData = await fetchAvailableRooms();
        const suiteRooms = roomData.filter(
          (room) => room.roomType === "Suite" || room.roomType === "suite"
        );
        setRooms(suiteRooms);
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
            roomType: "suite",
          },
        },
      }
    );
  };

  console.log("Current suite rooms state:", rooms);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between mx-4 sm:mx-20 md:mx-90 mt-18 pt-20">
        <MoveLeft
          onClick={handleArrowClick}
          className="scale-150 sm:scale-200 cursor-pointer hover:text-amber-400"
        />
        <div className="text-3xl sm:text-4xl md:text-5xl text-gray-600">
          <span className="text-amber-500">Luxury</span> Suites
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-start p-4 gap-6 mt-16">
        {loading && <div className="text-xl">Loading suites...</div>}
        {error && <div className="text-xl text-red-500">{error}</div>}

        {!loading && !error && rooms.length === 0 && (
          <div className="text-xl">No Suites available at the moment.</div>
        )}

        {!loading &&
          !error &&
          rooms.map((apiRoom, index) => {
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

export default SuiteRoomDetails;
