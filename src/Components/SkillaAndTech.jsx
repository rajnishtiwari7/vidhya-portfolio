import { Monitor, Cloud, BrainCircuit, Code } from "lucide-react";

function SkillAndTechCard({ item, logo: Logo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mt-10">
      {item.map((lang, index) => (
        <div key={index} className="flex items-center gap-4 m-6">
          <div
            className={`w-10 h-10 rounded-md bg-gradient-to-br ${lang.gradient} flex items-center justify-center text-white text-sm`}
          >
            <Logo className="w-6 h-6 text-fuchsia-600" />
          </div>
          <span className="font-medium text-gray-800">{lang.name}</span>
        </div>
      ))}
    </div>
  );
}

const SkillAndTech = () => {
  const languages = [
    { name: "Python", gradient: "from-yellow-400 to-orange-500" },
    { name: "JavaScript", gradient: "from-yellow-300 to-orange-400" },
    { name: "Java", gradient: "from-red-500 to-pink-500" },
    { name: "C", gradient: "from-blue-500 to-indigo-500" },
  ];
  const frontend = [
    { name: "React", gradient: "from-yellow-400 to-orange-500" },
    { name: "HTML", gradient: "from-yellow-300 to-orange-400" },
    { name: "CSS", gradient: "from-red-500 to-pink-500" },
    { name: "Streamlit", gradient: "from-blue-500 to-indigo-500" },
  ];
  const AiMl = [
    { name: "TensorFlow", gradient: "from-yellow-400 to-orange-500" },
    { name: "Pytorch", gradient: "from-yellow-300 to-orange-400" },
    { name: "Scikit-learn", gradient: "from-red-500 to-pink-500" },
    { name: "OpenCV", gradient: "from-blue-500 to-indigo-500" },
    { name: "NLP", gradient: "from-blue-500 to-indigo-500" },
    { name: "GenAI", gradient: "from-blue-500 to-indigo-500" },
  ];
  const cloud = [
    { name: "AWS EC2", gradient: "from-yellow-400 to-orange-500" },
    { name: "S3", gradient: "from-yellow-300 to-orange-400" },
    { name: "SageMaker", gradient: "from-red-500 to-pink-500" },
    { name: "Lambda", gradient: "from-blue-500 to-indigo-500" },
  ];

  return (
    <div id="skills" className="mt-20 text-center lg:p-30">
      <h1 className="text-3xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
        Skills And Technologies
      </h1>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div>
          <div className="text-2xl rounded-2xl bg-white  w-fit p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl flex items-center gap-2 font-semibold">
              <Code className="w-6 h-6 text-fuchsia-600" />
              Languages
            </h1>
            <SkillAndTechCard item={languages} logo={Code} />
          </div>
          <div className="text-2xl rounded-2xl bg-white w-fit p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl flex items-center gap-2 font-semibold">
              <BrainCircuit className="w-6 h-6 text-purple-600" />
              AI/ML
            </h1>
            <SkillAndTechCard item={AiMl} logo={BrainCircuit} />
          </div>
        </div>
        <div>
          <div className="text-2xl rounded-2xl bg-white w-fit p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h1 className="flex items-center gap-2 text-3xl font-semibold">
              <Monitor className="w-6 h-6" />
              Frontend
            </h1>
            <SkillAndTechCard item={frontend} logo={Monitor} />
          </div>
          <div className="text-2xl rounded-2xl bg-white w-fit p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <h1 className="text-3xl flex items-center gap-2 font-semibold">
              <Cloud className="w-6 h-6 text-blue-500" />
              Cloud
            </h1>
            <SkillAndTechCard item={cloud} logo={Cloud} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndTech;
