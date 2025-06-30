import { Mail, Linkedin, Github } from 'lucide-react';

const Connect = () => {
  return (
    <div id="contact" className="flex flex-col items-center mt-50 mb-50">
      <h1 className="text-3xl lg:text-6xl mt-20 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">Let's Connect</h1>
      <h2 className="text-lg text-center lg:text-2xl m-10 dark:text-white">
        I'm always open to discussing new opportunities, innovative projects,
        <br />
        and collaborations in AI/ML and cloud computing.
      </h2>
      <div className="flex gap-5 lg:gap-10">
        <a href="">
          <button className="flex gap-2 bg-white p-2 rounded-2xl border-2 hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"><Mail className="w-6 h-6" />Email Me</button>
        </a>
        <a href="">
          <button className="flex gap-2 bg-white p-2 rounded-2xl border-2 hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"><Linkedin className="w-6 h-6" />Linkedin</button>
        </a>
        <a href="">
          <button className="flex gap-2 bg-white p-2 rounded-2xl border-2 hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"><Github className="w-6 h-6" />GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Connect;
