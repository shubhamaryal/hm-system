import Hero from "../components/Hero";
import AvailabilityChecker from "../components/AvailabilityChecker";
import Description from "../components/Description";
import ShortBio from "../components/ShortBio";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <AvailabilityChecker />
      <ShortBio />
      <Description />
    </main>
  );
};

export default Home;
