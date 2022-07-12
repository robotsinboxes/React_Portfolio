import React from 'react';
import './About.css';
import Portrait from '../img/portrait.jpg';

const About = () => {
   return (
      <div className="about-container text-center">
         <div className="about-title">
               <h5>ABOUT</h5>
         </div>
         <div className="text-center about-img">
            <img src={Portrait} className="rounded card-img-top" alt='portrait-img'  />
         </div>
         <div className="about-content">
               <p>
                  I'm Lisa! Born in Ohio and raised in Texas, I've called Austin my home for the last 28 years. I love to eat popcorn and watch movies with my husband and four rowdy but lovable dogs.
               </p> 
               <p>
                  In spring of 2000 I opened a small local cafe and helped to turn it into a very successful, award-winning restaurant. I went back to school for a degree in Accounting, and for the last 15 I was the accountant and office administrator for the business.
               </p>
               <p>
                  While I am trained as a full stack software engineer, I am passionate about UI/UX design and hope to grow my talents accordingly. I've always considered myself a 'forever student', so I am eager to continually learn new skills in an industry where things are forever evolving.
               </p>
         </div>
      </div>
   )
}

export default About;