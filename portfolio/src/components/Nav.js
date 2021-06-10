import React from "react";
import Logo from "../img/pulsingCircle.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
            <a classNameName="navbar-brand" href="#"><img classNameName='logo' src={Logo} height="250px" alt='logo'></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faCaretSquareDown} />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="#">About</a>
                    <a className="nav-item nav-link" href="#">Work</a>
                    <a className="nav-item nav-link" href="#">Contact</a>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Nav;
