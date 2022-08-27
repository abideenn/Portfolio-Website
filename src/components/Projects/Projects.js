import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import traffic from "../../Assets/traffic.jpg";      
import house from "../../Assets/house.jpg"; 
import customer from "../../Assets/customer.jpeg"; 
import churn from "../../Assets/churn.jpeg"; 
import brain from "../../Assets/brain.jpg";
import weapon from "../../Assets/weapon.png";
import gym from "../../Assets/gym.jpg";
import caption from "../../Assets/caption.png";
import gan from "../../Assets/gans.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Website Traffic Forecasting"
              description="With Facebook Prophet, Arima, Sarimax, LSTM and XGBoost"
              link="https://github.com/zai-n/Website-Traffic-Forecasting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Housing Price Prediction"
              description="With Regression models, Heroku and PowerBI"
              link="https://github.com/zai-n/HousingPricePrediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="Segmentation of Store Customers"
              description="With K-Means, ACM, MS and DBSCAN"
              link="https://github.com/zai-n/CustomerSegmentation-with-KMeans-ACM-MS-DBSCAN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Customer Churn Predictor"
              description="With Classification models, Heroku and Tableau"
              link="https://github.com/zai-n/CustomerChurnPredictor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="Segmentation of Brain cancer images"
              description="With MaskRCNN, SegFormer and UNET"
              link="https://github.com/zai-n/ImageSegmentation-with-MaskRCNN-SegFormer-Unet"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weapon}
              isBlog={false}
              title="Object Detection of Weapons"
              description="With Yolov5, Yolov7 and FasterRCNN"
              link="https://github.com/zai-n/ObjectDetection-with-Yolov5-Yolov7-FasterRCNN"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="AI Gym Tracker"
              description="With Blazepose, Websocket and React"
              link="https://github.com/zai-n/AI-Gym-Tracker-PoseEstimation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={caption}
              isBlog={false}
              title="Image Captioning"
              description="With MobileNetv2 and LSTM"
              link="https://github.com/zai-n/Image-Captioning-with-MobileNet-and-LSTMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gan}
              isBlog={false}
              title="Generating Mnist Images with DCGAN"
              description="With Pytorch"
              link="https://github.com/zai-n/Generating-MnistImages-with-DCGAN"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
