import "./Skills.css"
const Skills=()=>{
    return(
        <>
        <div id="skill" className="Skills">
        <h1 >Skills page</h1>
        <div className="Skills_tool">
            <div>
            <a href="https://whatwg.org/">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="" />
            </a>
            </div>
            
            <div>
            <a href="https://www.w3.org/">
                <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="" />
            </a>
            </div>

            <div>
            <a href="https://www.javascript.com/">
                <img src="	https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="" />
            </a>
            </div>

            <div>
            <a href="https://react.dev/">
                <img src="	https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="" />
            </a>
            </div>

            <div>
            <a href="https://nodejs.org/en/">
                <img src="	https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="" />
            </a>
            </div>
        </div>
        </div>
        
        </>
    )

}
export default Skills;