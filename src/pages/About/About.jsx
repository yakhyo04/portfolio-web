import React from 'react';
import './About.scss';
import { ImPointRight } from "react-icons/im";
import about from '../../Assets/about.png';
import TechStack from './TechStack';
import Toolstack from './Toolstack';
import GitHub from './GitHub';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about__div">
                    <nav className="about__nav">
                        <p className='about__heading'>Know Who <span className='about__span'>I'm</span></p>
                        <p className='about__text'>Hi Everyone, I am <span className='about__span'>Yakhyo Abdulkhakov</span> from <span className='about__span'>Tashkent, Uzbekistan</span>.</p>
                        <p className='about__text'>I am a student at Academic Lyceum named After Nizami.</p>
                        <p className='about__text'>Apart from coding, some other activities that I love to do!</p>
                        <p className='about__subtext'><ImPointRight/> Playing Games</p>
                        <p className='about__subtext'><ImPointRight/> Writing Tech Blogs</p>
                        <p className='about__subtext'><ImPointRight/> Travelling</p>
                        <nav className="about__quotenav">
                        <p className='about__quote'>"Strive to build things that make a difference!"</p>
                        <p className='about__quotemen'>- Yakhyo</p>
                        </nav>
                    </nav>
                    <nav className="about__nav">
                        <img className='about__img' src={about} alt="about" />
                    </nav>
                </div>
                <h1 style={{textAlign: "center", paddingTop: "100px", paddingBottom: "15px"}}>Professional <span className='about__span'>Skillset</span></h1>
                <TechStack/>

                <h1 style={{textAlign: "center", paddingTop: "10px", paddingBottom: "15px"}}><span className='about__span'>Tools </span>I use</h1>
                <Toolstack/>

                <h1 style={{textAlign: "center", paddingTop: "10px", paddingBottom: "15px"}}>Days I <span className='about__span'> Code</span></h1>
                <GitHub/>
            </div>
        </div>
    );
}

export default About;
