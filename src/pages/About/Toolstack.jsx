import React from 'react';
import './About.scss';
import { Col, Row } from 'react-bootstrap';
import {
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
  } from "react-icons/si";

const Toolstack = () => {
    return (
        <Row style={{display:"flex",justifyContent: "center", flexWrap: "wrap", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHeroku/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel/>
            </Col>
        </Row>
    );
}

export default Toolstack;
