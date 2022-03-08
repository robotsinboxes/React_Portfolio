import React from 'react';
import Typed from 'react-typed';
import './Intro.css';

const Intro = () => {
  return (
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
              'React',
              'Javascript',
              'Typescript',
              'HTML',
              'CSS',
              'Bootstrap',
              'Chakra UI',
              'mySQL',
              'MongoDB',
              'Express.js',
              'Node.js',
              'Git/Github',
              'Agile Development',
              'Jira'
            ]}
          typeSpeed={80}
          backSpeed={80}
          // smartBackspace={true}
          loop={true}
        />
      </div>
    </div>
  )
}

export default Intro;

