import React from 'react';
import './DevelopmentProjects.css';
import Card from './Card';
import Button from './Button';
import NightDrive from './../img/night-drive-app.gif';
import T3W from './../img/t3w.gif';
import SuperHost from './../img/teddy-app.gif';

const DevelopmentProjects = () => {
   return (
      <div className="dev-projects-container container">
         <div className="text-center project-title">
               <h1>DEVELOPMENT PROJECTS</h1>
         </div>
         <div className="dev-project1">
            <Card 
               img={NightDrive} 
               title="Night Drive Music"
               desc=
                  "Night Drive is a dark synth-pop band based in Austin, TX. This website showcases their songs, music videos, merchandise, news and upcoming live shows. *This project is in progress*."
            />
            <div className="project-btn-links text-center">
               <Button href="https://nightdrivemusic.netlify.app/" 
                  btn="Website"></Button>
               <Button href="https://github.com/robotsinboxes/Tethered-to-the-Weather"   
                  btn="Github"></Button>
            </div> 
         </div>

         <div className="dev-project2">
            <Card 
               img={SuperHost} 
               title="Airbnb Superhost Services"
               desc=
                  "Teddy Vuong is an Airbnb Superhost Amabassor - this is a simple website built to promote services to help others start their own Airbnbs."
            />
            <div className="project-btn-links text-center">
               <Button href="https://www.superhostteddy.com/" 
                  btn="Website"></Button>
               <Button href="https://github.com/robotsinboxes/Tethered-to-the-Weather" 
                  btn="Github"></Button>
            </div> 
         </div>

         <div className="dev-project3">
               <Card 
                  img={T3W} 
                  title="Tethered to The Weather"
                  desc=
                     "T3W is a weather dashboard that allows users to look up the current weather and 5 day weather forecast for any city."  
               />
               <div className="project-btn-links text-center">
                  <Button href="https://github.com/robotsinboxes/Tethered-to-the-Weather" 
                     btn="Github"></Button>
               </div>
               <br></br>
         </div>
         {/* <div className="row project">
            <Card 
               img={Filmbank} 
               title="FILMBANK"
               desc=
                  "In it's current state, Filmbank allows the user to search for films to get release dates, plot summaries, cast and crew details and reviews. There is also a recommendation section of lesser known films at the bottom. Filmbank will not only be a film database, it will grow into a platform where film lovers can connect, make recommendations and collect lists of films to share with others. Users can follow one another, and write their own reviews. This app was built as a collaboration using HTML/CSS and vanilla JavaScript utilizing multiple RESTful APIs."
            />
            <div className="project-btn-links text-center">
               <Button href="https://github.com/robotsinboxes/FilmBank" btn="Github Repo"></Button>
            </div>
            <br></br>
         </div> */}
         <br></br>               

      </div>
   )
}

export default DevelopmentProjects;