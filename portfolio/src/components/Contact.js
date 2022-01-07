import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
// import Button from './Button';

const Contact = () => {
    return (
        <div className="contact-info">
            <div className="contact-title">
                <h5>CONTACT</h5>
            </div>
            <div className="contact-links row">
                <div className="linkedin col-sm-2">
                    <a 
                        href="https://www.linkedin.com/in/lisa-goodell/" 
                        target="_blank"
                        aria-label="linkedin"
                    >LinkedIn</a>
                </div>
                <div className="github col-sm-2">
                    <a 
                        href="https://github.com/robotsinboxes" 
                        target="_blank"
                        aria-label="github"
                    >Github</a>                
                </div>
                <div className="email col-sm-2">
                    <a 
                        href="mailto: robotsinboxes@gmail.com" 
                        target="_blank"
                        aria-label="email"
                    >Email</a>                 
                </div>
            </div> 
      </div>
    )
}

export default Contact;