import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import skilline from "../../Assets/skilline.jpg";
import movies from '../../Assets/movies.jpg';
import uzcrypto from '../../Assets/uzcrypto.jpg';
import scoot from '../../Assets/scoot.jpg';
import pomofocus from '../../Assets/pomofocus.jpg';
import dashboard from '../../Assets/dashboard.jpg';
import quiz from '../../Assets/quiz.jpg';
import eduvi from '../../Assets/eduvi.jpg';
import './Projects.scss';


const Projects = () => {
    return (
        <Container fluid className='project'>
            <Container>
            <h1 style={{paddingTop: "120px", paddingBottom: "40px"}}>My Recent <span className='project__span'> Works</span></h1>
                <p className='project__text'>Here are a few projects I've worked on recently.</p>
                <Row className='project__row'>
                    <Col md={4} className="project__card">
                        <ProjectCard 
                            imgPath={movies}
                            isBlog={false}
                            title="Movies App"
                            description="The age of streaming is upon us. In the move from cinema and cable TV to the internet, a handful of paid movie streaming apps—such as Netflix and Hulu—have become extremely popular."
                            link="https://movies-react-teal.vercel.app"
                            code="https://github.com/yakhyo04/movies-react"
                        />
                    </Col>

                    <Col md={4} className="project__card">
                    <ProjectCard 
                            imgPath={skilline}
                            isBlog={false}
                            title="Skilline"
                            description="Studying Online is now much easier Skilline is an interesting platform that will teach you in more an interactive way"
                            link="https://skillinee.netlify.app/"
                            code="https://github.com/yakhyo04/skilline"
                        />
                    </Col>

                    <Col md={4} className="project__card">
            <ProjectCard
              imgPath={uzcrypto}
              isBlog={false}
              title="Uz Crypto"
              description="Powered by cryptocurrency, the future of the internet: Web3 will be more fair and equitable, owned by the builders, creators and users. You. We believe it is your basic right to control your money, data and identity."
              link="https://uzcrypto.vercel.app/"
              code="https://github.com/yakhyo04/uzcrypto"
            />
          </Col>

          <Col md={4} className="project__card">
            <ProjectCard
              imgPath={scoot}
              isBlog={false}
              title="Scoot"
              description="Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
              link="https://scoot-01.netlify.app/"
              code="https://scoot-01.netlify.app/"
            />
          </Col>

          <Col md={4} className="project__card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Dashboard"
              description="A dashboard usually sits on its own page and receives information from a linked database. In many cases it’s configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers."
              link="https://dashboard1-two.vercel.app/"
              code="https://github.com/yakhyo04/dashboard1"
            />
          </Col>

          <Col md={4} className="project__card">
            <ProjectCard
              imgPath={pomofocus}
              isBlog={false}
              title="Pomofocus"
              description="Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo."
              link="https://pomofocus1.netlify.app/"
              code="https://github.com/yakhyo04/pomofocus1"
            />
          </Col>

          <Col md={4} className="project__card">
            <ProjectCard
              imgPath={eduvi}
              isBlog={false}
              title="Eduvi"
              description="Eduvi is a Global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the barriers togetting a degree."
              link="https://eduvi.netlify.app/"
              code="https://github.com/yakhyo04/eduvi2"
            />
          </Col>

          <Col md={4} className="project__card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              description="You create a quiz and give it a name. Then you can add questions and their answers to the quiz. When you're done you can take the quiz in normal or random order. You can also share the quiz with others."
              link="https://quiz-appreact.netlify.app/"
              code="https://github.com/yakhyo04/quiz"
            />
          </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
