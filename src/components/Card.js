import React, { Component }  from 'react'
import '../styles/Card.css';
import { FaStar, FaTv } from "react-icons/fa";
import { Switch, Route, Link } from "react-router-dom";

export default class Card extends Component {
    render() {
        return (
            <div className="img-container" key={this.props.id} title={this.props.title}>
            <Link to={`/show/${this.props.id}`}> 
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`} alt={this.props.title} />
            </Link>
                
            <div>
                <h3><FaTv /> {this.props.title} </h3>
                <span><FaStar /> {this.props.vote_average}</span>
                <p>{this.props.release_date}</p>
            </div>
        </div>
        )
    }
}
