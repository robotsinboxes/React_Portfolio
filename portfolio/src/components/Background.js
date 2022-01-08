import React from 'react';
import Particles from "react-particles-js";
import './Background.css';
// import Greeting from './Greeting';
// import Intro from './Intro';
// import Quote from './Quote';

const Background = (props) => {
    return (
      <div className="bg-intro">
        <div className="particles">
            <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 160,
                        "density": {
                            "enable": false
                        }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
              }
            }} 
            />
        </div>
        {/* <div className="introduction"> */}
            {/* <div className="greeting"> 
                <Greeting />
            </div> */}
            {/* <br></br>
            <div className="intro-container">
                <Intro />
            </div> */}
            {/* <div className="space-container"></div> */}
            {/* <div className="quote-container">
                <Quote />
            </div>  */}
        {/* </div>  */}
      </div>
    )
}

export default Background;