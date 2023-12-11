import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import GitHubCalendar from "react-github-calendar";
const MainComponent = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHubCalendar/>
      <Contact />
    </>
  );
};

export default MainComponent;
