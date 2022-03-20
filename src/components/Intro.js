import React from 'react';
import Typed from 'react-typed';
import BlackRocks from './../img/black-rocks-landscape.jpg';
import { Parallax } from 'react-parallax';
import './Intro.css';

const Intro = () => {
  return (
    <Parallax id="intro" bgImage={BlackRocks}>
      <div className="intro">
        <div className="hello">Hello, friend.</div> 
        <div className="intro-content">
          <h4>I am a Software Engineer with a passion for Front End and UI/UX Design.
          </h4>
        </div>
        <div className="skills">
          <Typed 
            className='typed-text'
            strings={[
                'Javascript',
                'React',
                //'Typescript',
                'Node.js',
                'HTML',
                'CSS',
                'Bootstrap',
                'Chakra UI',
                'Tailwind',
                'mySQL',
                'MongoDB',
                'Git/Github',
                'Figma',
                'Jira'
              ]}
            typeSpeed={80}
            backSpeed={80}
            // smartBackspace={true}
            loop={true}
          />
        </div>
      </div>
    </Parallax>
  )
}

export default Intro;

