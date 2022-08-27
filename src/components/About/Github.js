import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#2376dc",
    grade3: "#467cbf",
    grade2: "#5c80ac",
    grade1: "#b1c4db",
    grade0: "#cedcec",  
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        When I Have Used <strong className="purple">GitHub</strong>
      </h1>
      <GitHubCalendar
        username="zai-n"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
