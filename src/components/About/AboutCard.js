import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Zain ul Abideen </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I'm pursuing a <a href="https://nust.edu.pk/">Bachelors degree in Software Engineering at NUST</a>. I'm innovative and scientifically rigorous data scientist who wants to make an impact in a fast-paced environment, collaborate and bring significant data science experience to the table. Detail-oriented and always willing to go above and beyond. I have a keen interest in solving real-life problems with insight reporting and predictive modeling.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "All repetitive, menial computer tasks can most likely be automated or partially automated with the right code."{" "}
          </p>
          <footer className="blockquote-footer">Michael Beebower</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
