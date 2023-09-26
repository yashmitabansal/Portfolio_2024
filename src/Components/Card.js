import React from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web from "../Images/c1.jpg";
import { PData } from './Projectsdata';
import './Card.css';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <div>
            <div className='mx-auto'>
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="Animation Image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <NavLink to = {props.plink} className="btn ServiceBtn">Go On Project</NavLink>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;