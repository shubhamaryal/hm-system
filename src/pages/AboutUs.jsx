import NavBar from "../components/NavBar";
import { Users, Award, Clock, MapPin } from "lucide-react";

const AboutUs = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto px-4 py-12 max-w-7xl mt-36">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8">
          About <span className="text-amber-500">Us</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed max-w-3xl mx-auto text-center">
          Welcome to TableBooking, where luxury meets comfort. Our hotel offers
          exceptional accommodations and services to make your stay memorable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Users className="mx-auto text-amber-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
            <p className="text-gray-600">
              Our professional staff is committed to your comfort
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Award className="mx-auto text-amber-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-gray-600">
              Recognized for excellence in hospitality
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Clock className="mx-auto text-amber-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">
              Round-the-clock support for all your needs
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <MapPin className="mx-auto text-amber-500 mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">
              Conveniently located near major attractions
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-center">
            Contact <span className="text-amber-500">Us</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-gray-700 mb-4">location name</p>
              <p className="text-gray-700 mb-4">city or maps link</p>
              <h3 className="text-xl font-semibold mb-3">
                Contact Information
              </h3>
              <p className="text-gray-700 mb-2">Email: </p>
              <p className="text-gray-700 mb-2">Phone: </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
              <p className="text-gray-700 mb-2">Check-in: </p>
              <p className="text-gray-700 mb-2">Check-out: </p>
              <p className="text-gray-700 mb-2">Front Desk: </p>
              <p className="text-gray-700 mb-2">Restaurant:</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-500">
          Content coming soon...
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
