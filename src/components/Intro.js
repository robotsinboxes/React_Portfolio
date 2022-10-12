import React from 'react';
import Typed from 'react-typed';
import './Intro.css';

const Intro = () => {
return (
   <div className="intro">
      <div className="hello">
         <h1>Hello, friend.</h1>
      </div> 
      <div className="intro-content">
         <h1>I am a UX/UI Designer and Frontend Developer.</h1>
         <h3>I believe in creating meaningful and relevant experiences <br />for users in the context of designing beautiful apps. </h3>
      </div>
      <div className="skills">
         <Typed 
            className='typed-text'
            strings={[
               'Figma',
               'Adobe XD',
               'Agile Work Environment', 
               'HTML',
               'CSS',
               'React',
               'Javascript',
               'Node.js',
               'Bootstrap',
               'Chakra UI',
               'Tailwind',
               'mySQL',
               'MongoDB',
               'Git/Github'
               ]}
            typeSpeed={80}
            backSpeed={80}
            loop={true}
         />
      </div>
   </div>
)
}

export default Intro;

