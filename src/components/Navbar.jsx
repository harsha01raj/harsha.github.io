import "./Navbar.css";
import logo from "../Pic/logo.jpg";
import HarshResume from "../media/HarshResume.pdf";
import { FaBars, FaTimes } from "react-icons/fa";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { useRef } from "react";
import { useState } from "react";
import Headroom from "react-headroom";

const Navbar = () => {
  const navRef = useRef();
  const [icon, setIcon] = useState(false);

  const handleclick = () => {
    setIcon(!icon);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = { HarshResume };

    // Specify the name of the downloaded file
    link.download = "Harsh_resume.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  };

  return (
    <Headroom>
      <header>
        <img src={logo} id="img" alt="" />
        <nav ref={navRef} className={icon ? "navacitve" : "nav"}>
          <a href="/#home">Home</a>
          <a href="/#about">About</a>
          <a href="/#skill">Skills</a>
          <a href="/#project">Project</a>
          <a href="/#contact">Contact</a>
          <a href="/#resume" onClick={downloadResume}>
            Resume
            <LiaFileDownloadSolid />
          </a>
        </nav>
        <div id="mobile">
          <i id="bar" onClick={handleclick}>
            {" "}
            {icon ? <FaTimes /> : <FaBars />}
          </i>
        </div>
      </header>
    </Headroom>
  );
};
export default Navbar;
