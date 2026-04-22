import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Operations from "../components/Operations";
import Fleet from "../components/Fleet";
import Destinations from "../components/Destinations";
import SimMarquee from "../components/SimMarquee";
import JoinCTA from "../components/JoinCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      data-testid="home-page"
      className="relative min-h-screen bg-[#030C1A] text-white font-body overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <Operations />
      <SimMarquee />
      <Fleet />
      <Destinations />
      <JoinCTA />
      <Footer />
    </main>
  );
}
