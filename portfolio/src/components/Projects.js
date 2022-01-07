import React from 'react';
import './Projects.css';
import Card from './Card';
import Button from './Button';
import T3W from './../img/t3w.gif';
import Filmbank from './../img/filmbank.gif';
import TAP101 from './../img/TAP101.gif';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="text-center portfolio-title">
                <h5>PORTFOLIO</h5>
            </div>
            <div className="row project1">
                <Card 
                    img={T3W} 
                    title="Tethered to the Weather"
                    desc=
                        "A weather dashboard that allows the user to look up the current weather and 5 day weather forecast for any city. While the app is quite simplistic, it was the first project I built from start to finish on my own. I am currently in the process of rebuilding the app using a mobile-first approach as well as newly learned technologies. This app was built using HTML/CSS and JavaScript and utilizes the Open Weather Map API."  
                />
                <div className="project-btn-links text-center">
                    <Button href="https://github.com/robotsinboxes/Tethered-to-the-Weather" btn="Github Repo"></Button>
                </div>
            </div>
            <div className="row project2">
                <Card 
                    img={Filmbank} 
                    title="Filmbank"
                    desc=
                        "In it's current state, Filmbank allows the user to search for films to get release dates, plot summaries, cast and crew details and reviews. There is also a recommendation section of lesser known films at the bottom. Filmbank will not only be a film database, it will grow into a platform where film lovers can connect, make recommendations and collect lists of films to share with others. Users can follow one another, and write their own reviews. This app was built as a collaboration using HTML/CSS and vanilla JavaScript utilizing multiple RESTful APIs."
                />
                <div className="project-btn-links text-center">
                    <Button href="https://github.com/robotsinboxes/FilmBank" btn="Github Repo"></Button>
                </div>
            </div>
            <div className="row project3">
                <Card 
                    img={TAP101} 
                    title="Tutor Alumni Project"
                    desc=
                        "Tutor Alumni Project, also known as TAP101, is a site designed to help those who are new to learning to code seek guidance from others who have recently graduated or landed their first job in tech. Users can create accounts as either a student or tutor and have access to a bulletin board and a live chat to ask or respond to questions. As the app continues to grow, there will be a section with links to online resources, groups, upcoming events and meetups. There will also be the ability to filter through to find posts or questions about a particular topic. This app was built as a collaboration using React.js, React-Chat-Engine and Three.js."
                />
                <div className="project-btn-links text-center">
                    <Button href="https://github.com/robotsinboxes/TAP101" btn="Github Repo"></Button>
                </div> 
            </div>
            <br></br>               

        </div>
    )
}

export default Projects;