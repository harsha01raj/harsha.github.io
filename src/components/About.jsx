import "./About.css";

import copy from "copy-to-clipboard";
const About = () => {
  const email = "harshraj810k@gmail.com";
  return (
    <>
      <div id="about" className="About">
        <h1>About page</h1>
        <h1>I 'm Harsh Raj</h1>
        <p>
          Observant & detail-oriented aspiring full-stack web developer with a
          specialization in MERN stack. Judicious & creative when crafting web
          applications & platforms to propel competitive advantage & revenue
          growth. Looking forward to honing his skills in a challenging work
          environment.
        </p>
        <div className="copy">
          <p>Drop a mail @ {email} </p>
          <button onClick={() => copy(email)}>
            <img
              src="https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-copy-icon-png-image_889395.jpg"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
