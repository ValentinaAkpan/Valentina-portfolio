
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import EmailCampaigns from "../components/EmailCampaigns";
import LandingPages from "../components/LandingPages";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <EmailCampaigns />
      <LandingPages />
      <Contact />
    </div>
  );
};

export default Index;
