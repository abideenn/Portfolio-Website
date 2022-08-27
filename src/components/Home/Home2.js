import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"  width="300" height="200"/>
            </Tilt>
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className="purple"> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            I am an experienced software engineer skilled with building end-to-end Machine Learning pipelines including product inception & problem formulation, setting up infrastructure, developing code from scratch, testing, deploying to production, monitoring and maintenance. I am a young, energetic and geeky individual whose desire to learn is endless. 
              <br />
              <br />I am experienced in programming languages including
              <i>
                <b className="purple"> Python, R, Javascript</b>
              </i>
              , and Database dialects including
              <i>
                <b className="purple"> MySQL, PostgreSQL, and MongoDB</b>. I perform insight reporting using <b className="purple"> Microsoft Excel, Power BI, Tableau, Pandas, Matplotlib and Numpy</b>. I can perform predictive modeling using <b className="purple">Tensorflow, Pytorch, Sklearn</b> and various libraries of <b className="purple">R</b>. I can deploy models with <b className="purple">AWS and Flask</b>. 
              </i>
              <br />
              <br />
              {/* <i>
                <b className="purple">...placeholder </b> and
                also in areas related to{" "}
                <b className="purple">
                  ....placeholder
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> modern Javascript frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i> */}
            </p>
          </Col>
          {/* <Col md={3} className="myAvatar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zai-n"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zaiinulabideen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
