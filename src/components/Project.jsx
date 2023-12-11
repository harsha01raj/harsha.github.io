import Timer from "../Pic/Jstimer.png";
import "./Project.css"

const Project=()=>{
        const handleClick = () => {
          window.open(
            "https://github.com/harsha01raj/Asynchronous/blob/main/Jstimer.html"
          );
        };
    return(
        <>
        <div  id="project" className="project">
            <h1>Projects</h1>
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
                    <button id="button" onClick={handleClick}>GitHub</button>
                    <button id="button" onClick={handleClick}>GitHub</button>
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
                    <button id="button" onClick={handleClick}>GitHub</button>
                    <button id="button" onClick={handleClick}>GitHub</button>
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
                    <button id="button" onClick={handleClick}>GitHub</button>
                    <button id="button" onClick={handleClick}>GitHub</button>
                    </div>
                </div>
            </div>



        </div>
        </>
    )

}
export default Project;
