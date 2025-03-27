import { useState, useEffect } from "react";

function HotelAccommodation() {
  const images = [
    {
      src: "delux-room/1.jpeg",
      alt: "Luxury hotel room",
    },
    {
      src: "delux-room/2.jpeg",
      alt: "Luxury hotel room",
    },
    {
      src: "delux-room/3.png",
      alt: "Luxury hotel room",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute w-full max-w-7xl mx-auto top-350 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col md:flex-row items-center gap-18 p-4 md:p-6">
        <div className="w-full md:w-200 rounded-lg overflow-hidden relative h-[400px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 space-y-4 md:pl-4 flex flex-col gap-5">
          <h2 className="text-5xl font-light text-amber-500">
            Our Accommodations
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            We offer a variety of elegantly designed rooms, crafted to provide
            the perfect blend of luxury and comfort. From spacious suites with
            panoramic city views to cozy deluxe rooms with modern amenities,
            every stay promises a refined experience.
          </p>

          <div className="pt-2">
            <button className="inline-block px-6 py-3 bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors">
              View Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelAccommodation;
