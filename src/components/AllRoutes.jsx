import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
