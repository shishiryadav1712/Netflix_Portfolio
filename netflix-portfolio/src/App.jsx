import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Profiles from "./pages/Profiles";
import Browse from "./pages/Browse";
import Browser_2 from "./pages/Browser_2";
import WorkPermit from "./pages/WorkPermit";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certifications from "./pages/Certifications";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import FavoriteBlogs from "./pages/FavoriteBlogs";
import AlmaMater from "./pages/AlmaMater";
import GreatReads from "./pages/GreatReads";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/recruiter" element={<Browse />} />
      <Route path="/guest" element={<Browser_2 />} />
      <Route path="/work-permit" element={<WorkPermit />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/browse" element={<FavoriteBlogs />} />
      <Route path="/university" element={<AlmaMater />} />
      <Route path="/reads" element={<GreatReads />} />
      <Route path="/project" element={<Projects />} />

      <Route path="*" element={<Navigate to="/profiles" replace />} />
    </Routes>
  );
};

export default App;
