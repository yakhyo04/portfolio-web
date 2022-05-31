import React from 'react';
import './Home.scss';
import avatar from '../../Assets/avatar.svg';

const Home2 = () => {
    return (
        <div className='home__div2'>
            <nav className="home__nav2">
                <p className="home__subtitle">
                    LET ME <span className='home__subspan'>INTRODUCE</span> MYSELF
                </p>
                <p className='home__text'>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                <p className='home__text'>I am fluent in classics like <i><b className='home__bold'>HTML, CSS, Javascript, React, Nodejs, Express.js and PostgreSQL.</b></i></p>
                <p className="home__text">My field of Interest's are building new  <i><b className='home__bold'>Web Technologies and Products</b></i> and also in areas related to <i><b className='home__bold'>Deep Learning and Natural Launguage Processing.</b></i></p>
                <p className="home__text">Whenever possible, I also apply my passion for developing products with <i><b className='home__bold'>Node.js</b></i> and <i><b className='home__bold'>Modern Javascript Library and Frameworks</b></i>  like <i><b className='home__bold'>React.js and Next.js</b></i></p>
            </nav>
            <nav className="home__nav">
                <img className='home__image' src={avatar} alt="avatar" />
            </nav>
        </div>
    );
}

export default Home2;
