import React from 'react';
import './About.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

import { Col, Row } from 'react-bootstrap';

const TechStack = () => {
  return (
    <Row style={{display:"flex",justifyContent: "center", flexWrap: "wrap", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs/>
      </Col>
    </Row>
  );
}

export default TechStack;
