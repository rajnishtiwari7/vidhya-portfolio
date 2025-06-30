import { Typewriter } from "react-simple-typewriter";
import { Download } from "lucide-react";

function HeroText() {
  return (
    <div className="text-xl mt-8 text-black lg:text-3xl font-semibold text-center lg:mt-16 dark:text-white">
      I'm a{" "}
      <span className="text-cyan-400">
        <Typewriter
          words={[
            "Research enthusiast",
            "Cloud computing Specialist",
            "Full stack developer",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
}

const Home = () => {
  return (
    <div id="home" className="p-20 pt-50 lg:p-80">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold lg:text-8xl lg:font-semibold dark:text-white">
            VIDHYA S
          </h1>
          <HeroText />
          <p className="text-s lg:text-base dark:text-white dark:font-semibold">
            <br />
            Passionate AI/ML developer with expertise in cloud computing and
            <br />
            full-stack development. Transforming ideas into intelligent
            solutions
            <br />
            through cutting-edge technology.
          </p>
          <button className="m-5 lg:mt-4 border-2 p-1 rounded-2xl relative px-6 py-2 font-semibold text-black overflow-hidden group hover:cursor-pointer dark:text-white">
            <span
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 
    opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></span>
            <span className="relative z-10 flex items-center gap-2 ">
              <Download className="w-6 h-6 text-black dark:text-white" />
              Download Resume
            </span>
          </button>
        </div>
        <div>
          <img
            className="w-70 h-70 lg:w-120 lg:h-120 rounded-full object-cover shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            src="https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/65f9f249afd6383107f57e1a_How%20solopreneurs%20can%20build%20a%20business%20empire.webp"
            alt="profile-picture"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
