import React from "react";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    name: "Recruiter",
    img: "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp",
  },
  {
    name: "Guest",
    img: "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp",
  },
];

const Profiles = () => {
  const navigate = useNavigate();

  const handleSelect = (profileName) => {
    const profileKey = profileName.toLowerCase(); // "recruiter" or "guest"
    localStorage.setItem("profile", profileKey); // ✅ Set in localStorage

    navigate(profileKey === "recruiter" ? "/recruiter" : "/guest");
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl md:text-5xl font-semibold mb-10">
        Who's watching?
      </h1>
      <div className="flex gap-10 flex-wrap justify-center items-center w-full max-w-2xl">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            onClick={() => handleSelect(profile.name)}
            className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={profile.img}
              alt={profile.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded transition duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(229,9,20,0.7)]"
            />
            <span className="mt-2 text-lg text-gray-300">{profile.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;
