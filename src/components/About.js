import React from 'react';
import './About.css';
import Portrait from '../img/meandhenry.jpg';

const About = () => {
   return (
      <div className="about-container container">
         <div className="about-title">
               <h1>ABOUT</h1>
         </div>
         <div className="about-img">
            <img src={Portrait} alt='portrait-img'  />
         </div>
         <div className="about-text1">  
            <p className='pp1'>
               I'm Lisa! Born in Ohio and raised in Texas, I've called Austin my home for the last 28 years. I love to eat popcorn and watch movies with my husband and four rowdy but lovable dogs.
            </p> 
            <p className='pp2'>
               While I was trained as a full stack software engineer, my passion lies in UX/UI design, and I hope to grow my talents accordingly. I've always considered myself a 'forever student', so I am eager to continually learn new skills in an industry where things are always evolving.
            </p>
         </div>
         <div className="about-text2">
            <p className='pp3'>
               Previous to making a career change into tech, I co-opened a small local cafe in Austin. After going back to school for a degree in Accounting, I helped to grow it into a multi-million dollar, award-winning restaurant. The experience left me with a stong desire always show up and make a direct, positive impact on everything I do.
            </p>
         </div>
      </div>
   )
}

export default About;