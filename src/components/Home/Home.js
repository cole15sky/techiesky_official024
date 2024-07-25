import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
        

              

<h5 className="bold-name">
  Welcome to my digital domain! I'm 
   <strong className="main-name"> Aakash Dawadi </strong>  a  
  <strong className="main-name"> Computer Science </strong>student based in 
  <strong className="main-name"> Lalitpur, Nepal </strong> with a profound passion for the ever-evolving realms of computer science and information technology. <br />
  <br />My proficiency extends to a variety of programming languages and frameworks, as I believe in staying adaptable and embracing the continuous evolution of technology. From crafting elegant lines of code to troubleshooting intricate technical issues, I approach challenges with a blend of analytical thinking and creativity.

</h5>


              

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;