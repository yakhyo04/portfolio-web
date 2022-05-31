import React, {useState} from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { CgGitFork } from "react-icons/cg";



const Header = () => {

    const [toggleBtn, setToggleBtn] = useState(false);

    return (
        <header className='header'>
            <div className="container">
                <div className="header__div">
                    <nav className="header__nav">
                        <Link to={'/'} className='header__nav--link'>Yakhyo</Link>
                    </nav>
                    <nav className="header__nav">
                        <ul className='header__list'>
                            <li className="header__item">
                                <Link to="/" className='header__link'><AiOutlineHome/> Home</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/about" className='header__link'><AiOutlineUser/> About</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/projects" className='header__link'><AiOutlineFundProjectionScreen/> Projects</Link>
                            </li>
                            <li className="header__item">
                                <Link to="/resume" className='header__link'><CgFileDocument/> Resume</Link>
                            </li>
                            <li className="header__item">
                                <a href="https://github.com/yakhyo04" target="_blank" className='header__link header__item--link'><CgGitFork/><AiFillStar/></a>
                            </li>
                        </ul>
                        <button className='header__toggle' onClick={() => setToggleBtn(!toggleBtn)}><i className='fas fa-bars'></i></button>
                        {toggleBtn ?
                            <ul className='header__toggle--list'>
                            <li className="header__toggle--item">
                                <Link to="/" className='header__toggle--link header__link'><AiOutlineHome/> Home</Link>
                            </li>
                            <li className="header__toggle--item">
                                <Link to="/about" className='header__toggle--link header__link'><AiOutlineUser/> About</Link>
                            </li>
                            <li className="header__toggle--item">
                                <Link to="/projects" className='header__toggle--link header__link'><AiOutlineFundProjectionScreen/> Projects</Link>
                            </li>
                            <li className="header__toggle--item">
                                <Link to="/resume" className='header__toggle--link header__link'><CgFileDocument/> Resume</Link>
                            </li>
                            <li className="header__toggle--item">
                                <a href="https://github.com/yakhyo04" target="_blank" className='header__toggle--link header__toggle--item--link'><CgGitFork/><AiFillStar/></a>
                            </li>
                        </ul>
                            : null
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
