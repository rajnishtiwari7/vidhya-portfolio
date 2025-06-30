import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const NavBarItems = ({ item, link }) => {
  return (
    <div>
      <li className="hidden lg:block relative cursor-pointer text-black group transition duration-300 dark:text-white">
        <a href={link}>
          <span className="relative block group-hover:text-cyan-400 transition-colors duration-300">
            {item}
          </span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </li>
    </div>
  );
};

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.removeAttribute("data-theme");
    }
  }, [darkMode]);

  return (
    <div>
      <div className="flex justify-around pt-5 pb-2 fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/20 dark:border-white/10 z-50 dark:text-white">
        <h2 className="text-2xl font-semibold text-black tracking-wider drop-shadow-md dark:text-white">
          VIDHYA S
        </h2>
        <ul className="flex lg:space-x-10">
          <NavBarItems item="Home" link="#home" />
          <NavBarItems item="About" link="#about" />
          <NavBarItems item="Skills" link="#skills" />
          <NavBarItems item="Projects" link="#projects" />
          <NavBarItems item="Experience" link="#experiences" />
          <NavBarItems item="Certification" link="#certifications" />
          <NavBarItems item="Contact" link="#contact" />
          <li
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="hover:cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
