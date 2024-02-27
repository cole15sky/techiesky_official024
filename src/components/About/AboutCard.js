import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <h5 className="bold-name">
          Once upon a time, inside a country called Nepal, in the shadow of the Himalayas, there was a boy who asked way too many questions, making his parents and teachers mad. Then, as the years went by he stopped asking silly questions. And started asking sillier ones - questions to do with life, death, coffee, semicolons and such.
           </h5>
           <br />
            Hi Everyone, I am <span className="purple">Aakash Dawadi </span>
            from <span className="purple"> Chitwan,Nepal.</span>
            <br />
            I am currently a student at TU-IOST.
            <br />
            I love solving bugs and logical challanges.
            <br />
            <br/>  Within the intricate dance of algorithms and codes, I find my passion ignited, constantly seeking to unravel the complexities that define the backbone of digital systems. Whether it's developing sleek and efficient software solutions or architecting robust network infrastructures, I am driven by the pursuit of excellence and the desire to contribute meaningfully to the technological landscape.
            <br />

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Journal
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 
            </li>
          </ul>
         
          <p style={{ color: "rgb(155 126 172)" }}>
          <br/>
          <br/>

            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aakash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
