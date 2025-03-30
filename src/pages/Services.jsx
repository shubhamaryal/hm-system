import NavBar from "../components/NavBar";

const Services = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <div className="container mx-auto px-4 py-12 max-w-7xl mt-36">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-8">
          Our <span className="text-amber-500">Services</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed max-w-3xl mx-auto text-center">
          We offer a wide range of services to make your stay comfortable and
          memorable.
        </p>

        <div className="text-center mt-12 text-gray-500">
          Content coming soon...
        </div>
      </div>
    </main>
  );
};

export default Services;
