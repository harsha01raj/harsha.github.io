import GitHubCalendar from "react-github-calendar";
export default function GithubCalender() {
  return (
    <div id="githubCalendar">
    <GitHubCalendar
      className="react-activity-calendar"
      color="skyblue"
      username="harsha01raj"
      style={{margin:'auto'}}
    />
    
    <p>
      <img
        align="left"
        src="https://github-readme-stats.vercel.app/api/top-langs?username=harsha01raj&show_icons=true&locale=en&layout=compact"
        alt="harsha01raj"
      />
    </p>
    
    <p>
      &nbsp;
      <img
        align="center"
        src="https://github-readme-stats.vercel.app/api?username=harsha01raj&show_icons=true&locale=en"
        alt="harsha01raj"
      />
    </p>
    
    <p>
      <img
        align="center"
        src="https://github-readme-streak-stats.herokuapp.com/?user=harsha01raj&"
        alt="harsha01raj"
      />
    </p>
    </div>
  );
}




