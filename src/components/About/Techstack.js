import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {

  SiHeroku,
  SiTensorflow,
  SiPytorch,
  SiR,
  SiMicrosoftexcel,
  SiPowerbi,
  SiTableau,
  SiMongodb,
  SiKeras,
  SiAmazonaws,
  SiFlask,
  SiMysql,
  SiGithub
} from "react-icons/si";
import {
    DiReact,
    DiPython,
    DiJavascript
} from "react-icons/di";
import {SiJupyter} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftexcel />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiKeras />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript/>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
    </Row>
  );
}

export default Techstack;
