import React from 'react';
import './Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h2>About Me</h2>
                <Typed 
                    className='typed-text'
                    strings={["JavaScript", "HTML", "CSS", "Node", "React", "MongoDB","SQL"]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact</a>
            </div>
            
        </div>
    )
}

export default Header;
