import NavBar from "../components/NavBar";
import RoomList from "../components/RoomList";
import { MoveDownRight } from "lucide-react";

const Rooms = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto px-4 py-12 max-w-8xl mt-36">
        <div className="flex flex-col md:flex-row gap-12 mb-2">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-light">
              <span className="text-amber-400">Comfortable</span> Rooms
            </h2>
            <h3 className="text-4xl md:text-5xl font-light mt-2">
              Just For <span className="text-amber-400">You</span>
            </h3>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed w-full md:w-[80%] md:ml-40">
              Experience comfort and elegance with our thoughtfully designed
              hotel rooms. Each space blends style and functionality, offering a
              relaxing stay with modern amenities to ensure a memorable
              experience.
            </p>
            <div className="md:ml-40">
              <a className="text-lg text-amber-400 transition-colors flex gap-2 items-center">
                More Info <MoveDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-8xl">
        <RoomList number="01" title="Classic" image="/room-type/classic.jpeg" />
        <RoomList number="02" title="Deluxe" image="/room-type/delux.jpeg" />
        <RoomList number="03" title="Suite" image="/room-type/suite.jpeg" />
      </div>
    </main>
  );
};

export default Rooms;
