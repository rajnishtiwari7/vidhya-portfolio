import { ExternalLink } from "lucide-react";

function ProjectCard({ img, title, description, tags, link }) {
  return (
    <div
      id="projects"
      className="h-70 lg:h-110 w-100 rounded-2xl text-2xl bg-white p-1 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img src={img} alt="project-image" />
      <h2 className="m-4 font-semibold">{title}</h2>
      <h4 className="m-4 text-base">{description}</h4>
      <div className="flex">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="text-base m-2 bg-[#f3e8fe] w-fit rounded-l-2xl rounded-r-2xl text-[#8055bf] border-1 p-1"
          >
            {tag}
          </p>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="flex items-center text-base font-semibold justify-center bg-gray-300 rounded-2xl p-1 gap-2 w-full hover:cursor-pointer mt-2 hover:bg-gray-200">
          <ExternalLink className="w-5 h-5 text-blue-600" />
          View Project
        </button>
      </a>
    </div>
  );
}

const FeaturedProjects = () => {
  return (
    <div id="projects" className="mt-20">
      <h1 className="text-3xl lg:text-6xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
        Featured Projects
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:flex-wrap lg:m-50 lg:p-10 gap-10 ">
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
        <ProjectCard
          img="https://images.yourstory.com/cs/2/07f6d7f0ed8e11ed819979969b4b51e2/Yourparagraphtext8-1736426891164.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"
          title="Humanoid Robot"
          description="Knowledge base for Fiezzo Chatbot with dynamic QR code generation using Airtable"
          tags={["java", "c++"]}
          link="https://chatterly.fun"
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
