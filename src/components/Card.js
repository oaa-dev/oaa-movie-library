import React from 'react'
import '../styles/Card.css';
import { FaStar, FaTv } from "react-icons/fa";

const Card = (props) => {

    return (
        <div className="img-container" key={props.id} title={props.title}>
            <img src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt={props.title} />
            <div>
                <h3><FaTv /> {props.title} </h3>
                <span><FaStar /> {props.vote_average}</span>
                <p>{props.release_date}</p>
            </div>
        </div>
    )
}

export default Card