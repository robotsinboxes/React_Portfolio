import React from 'react';
import Particles from "react-particles-js";
import './Background.css';

const Background = (props) => {
    return (
      <div className="bg-intro">
        <div className="particles">
            <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 130,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "speed": 1,
                            "size_min": .5
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": .25,
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
                            "duration": 10,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 10
                        }
                    }
                }
            }} 
            />
        </div>

      </div>
    )
}

export default Background;