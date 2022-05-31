import React, {useState, useEffect} from 'react';
import './Resume.scss';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from '../../Assets/yakhyo.pdf';
// import portfolio from '../../Assets/../Assets/portfolio.jpg';
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const resumeLink =
  "https://raw.githubusercontent.com/yakhyo04/portfolio-react/master/src/Assets/yakhyo.pdf";

    const [width, setWidth] = useState(1200); 

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

    return (
        <div className='resume__div'>
            <Container fluid className="container resume__container">
        {/* <Particle /> */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button className='resume__btn'
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload/>
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center resume__link">
            <Page pageNumber={1} scale={width > 786 ? 0.6 : 0.6} />
          </Document>
        </Row>
          {/* <img src={portfolio} />  */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className='resume__btn'
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
        </div>
    );
}

export default Resume;
