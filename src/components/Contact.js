import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { IconContext } from "react-icons";



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
                        aria-label="linkedin">
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                            <BsLinkedin/>
                        </IconContext.Provider>
                    </a>
                    <a className="btn btn-outline-light" 
                        href="https://github.com/robotsinboxes" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="github">
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                            <BsGithub/>
                        </IconContext.Provider>
                    </a>                
             
                    <a className="btn btn-outline-light" 
                        href="mailto: robotsinboxes@gmail.com" 
                        target="_blank"
                        rel="noreferrer"
                        aria-label="email">
                        <IconContext.Provider value={{className: 'contact-icon'}}>
                            <FaRegPaperPlane/>
                        </IconContext.Provider>
                    </a>                 
                </div>
                <div className="spaceHolder"></div>
            </div> 
      </div>
    )
}

export default Contact;