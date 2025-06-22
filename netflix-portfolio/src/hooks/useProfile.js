import { useNavigate } from "react-router-dom";

const useProfile = () => {
  const navigate = useNavigate();
  const profile = localStorage.getItem("profile");
  const isRecruiter = profile === "recruiter";

  // Avatar based on profile
  const avatar = isRecruiter
    ? "https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
    : "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

  // Redirect to correct homepage
  const goHome = () => {
    navigate(isRecruiter ? "/recruiter" : "/guest");
  };
  const goToDashboard = () => {
    const profile = localStorage.getItem("profile");
    if (profile === "recruiter") navigate("/recruiter");
    else if (profile === "guest") navigate("/guest");
    else navigate("/profiles"); // fallback
  };

  // Navigation menu items
  const getNavLinks = () => [
    { label: "Home", path: isRecruiter ? "/recruiter" : "/guest" },
    { label: "Professional", path: "/experience" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/project" },
    { label: "Hire Me", path: "/contact-me" },
  ];

  // Reset profile and return to profile selection
  const resetProfile = () => {
    localStorage.removeItem("profile");
    navigate("/profiles");
  };

  return {
    profile,
    isRecruiter,
    avatar,
    goHome,
    getNavLinks,
    resetProfile,
    goToDashboard,
  };
};

export default useProfile;
