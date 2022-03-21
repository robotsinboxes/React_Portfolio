import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className="buttons">
            <a className="btn-link"
                href={props.href} 
                target="_blank"
                rel="noreferrer"
                aria-label="github"
            >{props.btn}</a>                 
        </div>
    )
}

export default Button;