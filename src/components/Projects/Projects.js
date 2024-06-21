import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/ Ss_Calculator.png";
import toDoList from "../../Assets/Ss_To-Do-List.png";
import slider from "../../Assets/slider.png";
import blog from "../../Assets/blog_sky.png";
import gallery from "../../Assets/gallery_templete.png";




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
              imgPath={slider}
              isBlog={false}
              title="Image-Slider"
              description="This project includes the amazing image slider design with effective slide show and animnation."
              ghLink="https://github.com/cole15sky/Gallery_img_slider"
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="This project allows user to perform basic mathematical calculations i.e (+,-,*,/)"
              ghLink="https://github.com/cole15sky/Calculator-JS.git"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="blog_techiesky"
              description="SKY_BLOGS explain the journey of my life in the field of Science and technology."
              ghLink="https://github.com/cole15sky/blog_techiesky"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDoList}
              isBlog={false}
              title="To-Do-List"
              description="This is a simple To-Do List project built using HTML, CSS, and JavaScript. The lil project allows user to add, mark as complete, and delete tasks. "
              ghLink="https://github.com/cole15sky/To-Do-List"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Photo Gallery"
              description=" My recent travel snapshots to highlight my peak moment captured in a images."
              ghLink="https://github.com/cole15sky/Gallery_templete"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
