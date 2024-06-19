import Timer from "../Pic/Jstimer.png";
import Nordstrom from "../Pic/Nordstrom Rack.jpg";
import Tata from "../Pic/Tata_1mg.jpg"
import "./Project.css"

const Project=()=>{
        
    return(
        <>
        <div  id="project" className="project">
            <h1>Projects</h1>
            <div className="projects">
                <img src={Nordstrom} alt="" />
                <div className="details">
                    <h1>Java Script Timer</h1>
                    <ul>
                        <li>Set time </li>
                        <li>Then press SetTIme Button </li>
                        <li>Now press Start</li>
                        <li>The status become true</li>
                    </ul>
                    <h4>TechStack- JavaScript|CSS|Git</h4>
                    <div className="button">
                    <button id="button" onClick={()=>window.open("https://github.com/masai-course/harsh_raj_cap05_206/tree/master/Frontend%20folder/React%20project/Nordstromrack")}>GitHub</button>
                    <button id="button" onClick={()=>window.open("https://nordstrom-rack-online.netlify.app/")}>Deploy link</button>
                    </div>
                </div>
            </div>

            <div className="projects">
                <img src={Tata} alt="" />
                <div className="details">
                    <h1>Java Script Timer</h1>
                    <ul>
                        <li>Set time </li>
                        <li>Then press SetTIme Button </li>
                        <li>Now press Start</li>
                        <li>The status become true</li>
                    </ul>
                    <h4>TechStack- JavaScript|CSS|Git</h4>
                    <div className="button">
                    <button id="button" onClick={()=>window.open("https://github.com/masai-course/harsh_raj_cap05_206/tree/master/Frontend%20folder/HTML%20and%20CSS/TATA_1mg%20project")}>GitHub</button>
                    <button id="button" onClick={()=>window.open("https://661d6de03decd716e5f24947--monumental-scone-b4bac9.netlify.app/")}>Deploy link</button>
                    </div>
                </div>
            </div>

            <div className="projects">
                <img src={Timer} alt="" />
                <div className="details">
                    <h1>Java Script Timer</h1>
                    <ul>
                        <li>Set time </li>
                        <li>Then press SetTIme Button </li>
                        <li>Now press Start</li>
                        <li>The status become true</li>
                    </ul>
                    <h4>TechStack- JavaScript|CSS|Git</h4>
                    <div className="button">
                    <button id="button"  onClick={()=>window.open("https://github.com/harsha01raj/Asynchronous/blob/main/Jstimer.html")}>GitHub</button>
                    <button id="button" onClick={()=>window.open("https://creative-parfait-ad3773.netlify.app/")}>Deploy link</button>
                    </div>
                </div>
            </div>


        </div>
        </>
    )

}
export default Project;
