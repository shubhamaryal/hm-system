import React from "react";

import Hero from "../components/Hero";
import AvailabilityChecker from "../components/AvailabilityChecker";
import Description from "../components/Description";
import ShortBio from "../components/ShortBio";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <AvailabilityChecker />
      <ShortBio />
      <Description />
    </main>
  );
};

export default Home;
