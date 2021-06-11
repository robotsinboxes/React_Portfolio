import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Works.css';
import FilmBankImg from '../img/filmbank.gif';
import StardustImg from '../img/stardust.png';

const Works = () => {
    return (
        <div className="card-container" width="18rem">
            <div className="card works filmbank">
                <div className="card-img-top">
                    <img src={FilmBankImg} width='400px'></img>
                </div>
                <div className="card-body">
                    <p>FilmBank (coming soon!)</p>
                </div>
            </div>
            <div className="card works stardust">
                <div className="card-img-top">
                    <img src={StardustImg} width='500px'></img>
                </div>
                <div className="card-body">
                    <p>Stardust (coming soon!)</p>
                </div>
            </div>
        </div>
    )
}

export default Works;