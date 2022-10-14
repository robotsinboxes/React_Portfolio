import React from 'react';
import './DevelopmentProjects.css';
import Card from './Card';
import Button from './Button';
import NightDrive from './../img/night-drive.jpg';
import T3W from './../img/t3w.gif';
import SuperHost from './../img/teddy-site.jpg';

const DevelopmentProjects = () => {
   return (
      <div className="projects-container">
         <div className="text-center project-title">
               <h1>DEVELOPMENT PROJECTS</h1>
         </div>

         <div className="row project">
            <Card 
               img={NightDrive} 
               title="Night Drive Music"
               desc=
                  "This project is a band website showcasing Night Drive's songs, music videos, merchandise, news and upcoming live shows, using ReactJS. The audio player was built with Javascript, and I used React-Player for the embedded videos. * This app is still in progress *"
            />
            <div className="project-btn-links text-center">
               <Button href="https://github.com/robotsinboxes/night-drive-music" btn="Github Repo"></Button>
            </div> 
         </div>

         <div className="row project">
            <Card 
               img={SuperHost} 
               title="Airbnb Superhost Site"
               desc=
                  "This is a simple website built to promote services provided by an Airbnb Superhost Ambassador using HTML and CSS."
            />
            <div className="project-btn-links text-center">
               <Button href="https://github.com/robotsinboxes/vuong-superhost" btn="Github Repo"></Button>
            </div> 
         </div>

         <div className="row project">
               <Card 
                  img={T3W} 
                  title="TETHERED TO THE WEATHER"
                  desc=
                     "A weather dashboard that allows the user to look up the current weather and 5 day weather forecast for any city. While the app is quite simplistic, it was the first project I built from start to finish on my own. I am currently in the process of rebuilding the app using a mobile-first approach as well as newly learned technologies. This app was built using HTML/CSS and JavaScript and utilizes the Open Weather Map API."  
               />
               <div className="project-btn-links text-center">
                  <Button className="btn1" href="https://github.com/robotsinboxes/Tethered-to-the-Weather" btn="Github Repo"></Button>
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