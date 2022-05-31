import React from 'react';
import './Home.scss';
import homeLogo from '../../Assets/home-main.svg';
import Type from './Type';
import Home2 from './Home2';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <div className="home__div">
                    <nav className="home__nav">
                        <p className='home__title'>Hi There ! <span className='home__hello'>👋🏻</span></p>
                        <p className='home__heading'>I'm <strong className='home__name'>Yakhyo Abdulkhakov</strong></p>
                        <div className='home__name' style={{ textAlign: "left", fontSize:"28px" }}>
                            <Type />
                        </div>
                    </nav>
                    <nav className="home__nav">
                        <img className='home__img' src={homeLogo} alt="homeLogo" />
                    </nav>
                </div>
                <Home2/>
                <div className="home__subdiv">
                <h1 className='home__subheading'>Find me on</h1>
                <p className="home__text">Feel free to <span className='home__bold'>connect</span> with me</p>
                <ul className='home__list'>
                    <li className="home__item"><a className='home__icon' href="https://github.com/yakhyo04"
                  target="_blank"><AiFillGithub/></a></li>
                    <li className="home__item"><a className='home__icon'  href="https://twitter.com/yahyoblog"
                  target="_blank"><AiOutlineTwitter/></a></li>
                    <li className="home__item"><a className='home__icon' href="https://www.linkedin.com/in/yakhyo-abdulkhakov-998719200/"
                  target="_blank"><FaLinkedinIn/></a></li>
                    <li className="home__item"><a className='home__icon' href="https://www.instagram.com/abdulkhakoff/"
                  target="_blank"><AiFillInstagram/></a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
