import { ExternalLink, FileCheck } from "lucide-react";

function PublicationsCard({ title, publisher, tag, link }) {
  return (
    <div className="flex w-90 justify-between items-center px-4 bg-white rounded-2xl lg:w-5xl p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2x hover:cursor-pointer">
      <div className="flex items-center gap-2">
        <FileCheck className="w-6 h-6 text-purple-600" />
        <div>
          <h1>{title}</h1>
          <h4>{publisher}</h4>
          <h6>{tag}</h6>
        </div>
      </div>
      <div>
        <a href={link}>
          <button className="flex items-center gap-2 hover:cursor-pointer">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            View
          </button>
        </a>
      </div>
    </div>
  );
}

const Publications = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-6xl text-center mt-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">
        Publications
      </h1>
      <div className="flex flex-col items-center">
        <PublicationsCard
          title="12th"
          publisher="abc"
          tag="2022-26"
          link="https://chatterly.fun"
        />
        <PublicationsCard
          title="12th"
          publisher="abc"
          tag="2022-26"
          link="https://chatterly.fun"
        />
        <PublicationsCard
          title="12th"
          publisher="abc"
          tag="2022-26"
          link="https://chatterly.fun"
        />
      </div>
    </div>
  );
};

export default Publications;
