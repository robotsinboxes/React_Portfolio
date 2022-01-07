import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import Button from './Button';

const Contact = () => {
    return (
        <div className="contact-info">
            <div className="contact-title">
                <h5>CONTACT</h5>
            </div>
            <div className="contact-links row">
                <div className="linkedin col-sm-2">
                    <Button btn="LinkedIn"></Button>
                </div>
                <div className="github col-sm-2">
                    <Button btn="Github" href="https://github.com/robotsinboxes" target="_blank"></Button>
                </div>
                <div className="email col-sm-2">
                    <Button btn="Email" href="mailto: robotsinboxes@gmail.com" target="_blank"></Button>
                </div>
            </div> 
      </div>
    )
}

export default Contact;