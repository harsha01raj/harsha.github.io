import "./Home.css";
import Harsh from "../Pic/Harsh.jpg";
import Typed from "react-typed";
const Home = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1i-5Khs7b5nKI2ZngfP4Yae3NsL8spX3Y/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <div id="home" className="heading-home">
        <h1>Home</h1>
        <div className="Home">
          <div className="div">
            <div>
              <div className="greet">
                <h1>Hello </h1>
                <img
                  src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  alt=""
                />
                <h1>,</h1>
              </div>
              <h1 id="head">
                My name is <span>Harsh raj.</span> 
              </h1>
            </div>
            <div className="wrapper">
              <div className="static-txt">
                I ' m a &nbsp;
                <span>
                  <Typed
                    strings={["Web Developer.", "Freelancer.","Youtuber."]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                  />
                </span>
              </div>
              
            </div>
            <button id="button" onClick={openResume}>Resume</button>
            <div className="icondiv">
              <a
                id="anchor"
                target="_blank"
                rel="noreference"
                href="https://www.linkedin.com/in/harsh-raj-49286427a/"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6_hHassNKu6VuARMFw2AL233-1blo5EAulWftov9nx3iw5NLAkMQ0s6fC4U5Ehhv3Bk&usqp=CAU"
                  alt=""
                />
              </a>

              <a
                id="anchor"
                target="_blank"
                rel="noreference"
                href="https://github.com/harsha01raj/"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0Gcec2Q-pDXvOc62gDjtv1EX11HoQ00tRQ&usqp=CAUg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <img src={Harsh} alt="" id="image" />
        </div>
      </div>
    </>
  );
};

export default Home;
