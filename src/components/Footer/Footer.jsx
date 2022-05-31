import React from 'react';
import './Footer.scss';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className="footer__list">
                    <li className="footer__item">
                        Designed and Developed by Yakhyo Abdulkhakov
                    </li>
                    <li className="footer__item">Copyright © 2022 Yakhyo</li>
                    <li className="footer__item">
                    <ul className='footer__sublist'>
                    <li className="footer__subitem"><a className='footer__icon' href="https://github.com/yakhyo04"
                  target="_blank"><AiFillGithub/></a></li>
                    <li className="footer__subitem"><a className='footer__icon'  href="https://twitter.com/yahyoblog"
                  target="_blank"><AiOutlineTwitter/></a></li>
                    <li className="footer__subitem"><a className='footer__icon' href="https://www.linkedin.com/in/yakhyo-abdulkhakov-998719200/"
                  target="_blank"><FaLinkedinIn/></a></li>
                    <li className="footer__subitem"><a className='footer__icon' href="https://www.instagram.com/abdulkhakoff/"
                  target="_blank"><AiFillInstagram/></a></li>
                </ul>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
