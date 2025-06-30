const About = () => {
  return (
    <div id="about" className="justify-items-center">
      <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">About Me</h1>
      <div className="lg:text-2xl bg-white lg:w-fit p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <p>
          I'm a passionate Computer Science student specializing in AI/ML at KPR
          <br className="hidden lg:block"/>
          Institute of Engineering and Technology. With a strong foundation in
          <br className="hidden lg:block"/>
          machine learning, deep learning, and cloud computing, I've developed
          <br className="hidden lg:block"/>
          multiple innovative projects ranging from avatar generation systems to
          <br className="hidden lg:block"/>
          autism detection platforms.
        </p>
        <div className="flex justify-around mt-15">
          <div>
            <img
              className="h-10 w-10 lg:h-30 lg:w-30"
              src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
              alt="cgpa"
            />
            <h4 className="lg:text-xl font-semibold">CGPA: 8.72</h4>
            <p className="text-sm text-black">
              B.E. Computer Science (AIML)
            </p>
          </div>
          <div>
            <img
              className="h-10 w-10 lg:h-30 lg:w-30"
              src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
              alt="cgpa"
            />
            <h4 className="lg:text-xl font-semibold">CGPA: 8.72</h4>
            <p className="text-sm text-black">
              B.E. Computer Science (AIML)
            </p>
          </div>
          <div>
            <img
              className="h-10 w-10 lg:h-30 lg:w-30"
              src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
              alt="cgpa"
            />
            <h4 className="lg:text-xl font-semibold">CGPA: 8.72</h4>
            <p className="text-sm text-black">
              B.E. Computer Science (AIML)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
