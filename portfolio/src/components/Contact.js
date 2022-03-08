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
            <div className="row">
                <div className="contact-links">
                    <a className="btn btn-outline-light"
                        href="https://www.linkedin.com/in/lisa-goodell/" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="linkedin"
                    >LinkedIn</a>
            
                    <a className="btn btn-outline-light" 
                        href="https://github.com/robotsinboxes" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github"
                    >Github</a>                
             
                    <a className="btn btn-outline-light" 
                        href="mailto: robotsinboxes@gmail.com" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="email"
                    >Email</a>                 
                </div>
                <div className="spaceHolder"></div>
            </div> 
      </div>
    )
}

export default Contact;