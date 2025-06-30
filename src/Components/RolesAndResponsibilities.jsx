function RolesAndResponsibilitiesCard({
  role,
  location,
  description = "",
  duration,
}) {
  return (
    <div className="flex w-90 justify-between items-center px-4 bg-white rounded-2xl lg:w-5xl p-10 mt-20 transition-all duration-300 hover:scale-105 hover:shadow-2x hover:cursor-pointer">
      <div>
        <h1>{role}</h1>
        <h4>{location}</h4>
        <h6>{description}</h6>
      </div>
      <div>
        <h6>{duration}</h6>
      </div>
    </div>
  );
}

const RolesAndResponsibilities = () => {
  return (
    <div>
      <h1 className="text-3xl lg:text-6xl text-center mt-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500">Roles & Responsibilities</h1>
      <div className="flex flex-col items-center">
        <RolesAndResponsibilitiesCard
          role="12th"
          location="abc"
          duration="2022-26"
        />
        <RolesAndResponsibilitiesCard
          role="12th"
          location="abc"
          duration="2022-26"
        />
        <RolesAndResponsibilitiesCard
          role="12th"
          location="abc"
          duration="2022-26"
        />
      </div>
    </div>
  );
};

export default RolesAndResponsibilities;
