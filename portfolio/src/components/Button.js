import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className="buttons">
            <button className="btn-outline-light button-all">{props.btn}</button>
        </div>
    )
}

export default Button;