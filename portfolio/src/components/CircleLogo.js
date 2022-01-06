import React from "react";
import CircleLogo from "../img/pulsingCircle.gif";
import './CircleLogo.css';

function Logo() {
    return (
        <div className="logo-container container">
            <div className="logo-brand">
                <img className='logo' src={CircleLogo} alt='logo'></img>
            </div>
        
        </div>
    );
}

export default Logo;