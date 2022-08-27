import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiGithub
} from "react-icons/si";
import {
    DiDocker,
    DiGit,
    DiWindows
} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
        </Col>
        
    </Row>
  );
}

export default Toolstack;
