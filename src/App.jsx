import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import SkillAndTech from "./Components/SkillaAndTech";
import FeaturedProjects from "./Components/FeaturedProjects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import RolesAndResponsibilities from "./Components/RolesAndResponsibilities";
import Publications from "./Components/Publications";
import Certifications from "./Components/Certifications";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";
import GradientCursor from "./Components/GradientCursor";

const App = () => {
  return (
    <div className="bg-[#f4f5fc] min-h-screen overflow-x-hidden transition-colors duration-500 ease-in-out dark:bg-slate-900">
      <GradientCursor />
      <NavBar />
      <Home />
      <About />
      <SkillAndTech />
      <FeaturedProjects />
      <Education />
      <Experience />
      <Certifications />
      <RolesAndResponsibilities />
      <Publications />
      <Connect />
      <Footer />
    </div>
  );
};

export default App;
