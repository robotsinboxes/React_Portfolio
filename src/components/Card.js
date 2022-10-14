import React from 'react';
import './Card.css';

const Card = (props) => {
   return (
      <div className="cards">
         <br></br>
         <div className="text-center card-img">
            <img src={props.img} className="rounded card-img-top" alt='project-img' />
         </div>
         <div className="card-body">
            <div className="text-center card-title">
               <h1>{props.title}</h1>
            </div>
            <hr className="divider"></hr>
            <div className="text-center card-desc">
               <h4>{props.desc}</h4>
            </div>
         </div>
         <br></br>
      </div>
   )
}

export default Card;