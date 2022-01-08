import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="cards">
            <div className="text-center card-img">
                <img src={props.img} className="rounded card-img-top" alt='project-img' />
            </div>
            <div className="card-body">
                <div className="text-center card-title">
                    <p>{props.title}</p>
                </div>
                <hr></hr>
                <div className="text-center card-desc">
                    <p>{props.desc}</p>
                </div>
                
                {/* <div className="spacing"></div> */}
            </div>
            <br></br>
        </div>
    )
}

export default Card;