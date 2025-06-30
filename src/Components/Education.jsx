import { GraduationCap } from "lucide-react";

function EducationCard({
  course,
  institute,
  description = "",
  grade,
  duration,
}) {
  return (
    <div
      id="education"
      className="flex w-90 justify-between items-center px-4 bg-white rounded-2xl lg:w-5xl p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2x hover:cursor-pointer"
    >
      <div className="flex flex-row gap-2">
        <GraduationCap className="w-8 h-8 text-indigo-600" />
        <div>
          <h1 className="font-semibold text-xl">{course}</h1>
          <h4 className="text-base">{institute}</h4>
          <h6 className="text-gray-500 mt-2">{description}</h6>
        </div>
      </div>
      <div>
        <h5 className="border-1 rounded-2xl p-1 text-[#7b52b7]">{grade}</h5>
        <h6 className="mt-2">{duration}</h6>
      </div>
    </div>
  );
}

const Education = () => {
  return (
    <div>
      <h1 className="mt-20 text-3xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
        Education
      </h1>
      <div className="flex flex-col items-center">
        <EducationCard
          course="12th"
          institute="abc"
          description="this is education"
          grade="95%"
          duration="2022-26"
        />
        <EducationCard
          course="12th"
          institute="abc"
          grade="95%"
          duration="2022-26"
        />
        <EducationCard
          course="12th"
          institute="abc"
          grade="95%"
          duration="2022-26"
        />
      </div>
    </div>
  );
};

export default Education;
