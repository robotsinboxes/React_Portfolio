import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className="buttons">
            <button className="btn-outline-light button-all" onClick={() => {window.open("http://www.imlisagoodell.com", "_blank")}}>{props.btn}</button>
        </div>
    )
}

export default Button;