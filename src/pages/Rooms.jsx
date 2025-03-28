import React from "react";
import NavBar from "../components/NavBar";
import RoomList from "../components/RoomList";

const Rooms = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <RoomList />
    </main>
  );
};

export default Rooms;
