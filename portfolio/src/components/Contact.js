import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-info">
            <div className="card linkedin" width="50px">
                <div className="card-img-top">
                    <i class="fab fa-linkedin"></i>
                </div>
                <div className="card-body">
                    <p>@lisa-goodell</p>
                </div>
            </div>
            <div className="card email">
                <div className="card-img-top">
                    <i class="far fa-envelope"></i>                
                </div>
                <div className="card-body">
                    <p>robotsinboxes@gmail.com</p>
                </div>
            </div>
            <div className="card phone">
                <div className="card-img-top">
                    <i class="fas fa-phone-square"></i>
                </div>
                <div className="card-body">
                    <p>512.789.8902</p>
                </div>
            </div>
            <div className="card github">
                <div className="card-img-top">
                    <i class="fab fa-github-square"></i>
                </div>
                <div className="card-body">
                    <p>@robotsinboxes</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;