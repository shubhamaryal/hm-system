import React from "react";

import Hero from "../components/Hero";
import AvailabilityChecker from "../components/AvailabilityChecker";
import Description from "../components/Description";
import ShortBio from "../components/ShortBio";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AvailabilityChecker />
      <ShortBio />
      <Description />
    </main>
  );
};

export default Home;
