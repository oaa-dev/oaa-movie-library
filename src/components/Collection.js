import React, { Component } from 'react'
import axios from 'axios';
import '../styles/Collection.css'
import Card from './Card';
import { FaFolder, FaTv } from "react-icons/fa";

export default class MovieList extends Component {
    constructor(props){
        super(props);
        
        this.state = { genres : null, movies : null }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7aea42c3d4b351d11ef26f33331883cb&language=en-US`)
        .then(res => {
            const genres = res.data.genres;
            this.setState({ genres });
        })

        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=7aea42c3d4b351d11ef26f33331883cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12`)
        .then(res => {
            const movies = res.data.results;
            this.setState({ movies });
        })
    }

    handleClick = (genre) => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=7aea42c3d4b351d11ef26f33331883cb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`)
        .then(res => {
            //   console.log(res)
            const movies = res.data.results;
            this.setState({ movies });
        })
    }

    render() {
        return (
            <section className="main-container">
                <div className="container">
                    <div className="nav">
                        <h2>Search by Genres</h2>
                        <nav>
                            <ul>
                                {
                                    this.state.genres !== null ?
                                        this.state.genres.map((value)=>(
                                        <li onClick={() => this.handleClick(value.id)}><FaFolder/> {value.name}</li>
                                        )):''
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="content">
                        <div className="content-header">
                            <h1><FaTv/> List of Movies</h1> 
                            <hr/>
                        </div>
                        <div className="filter-movies">
                            {
                                this.state.movies !== null ?
                                    this.state.movies.map((value)=>(
                                        <Card id={value.id} 
                                            title={value.media_type == 'tv'? value.name : value.title} 
                                            poster_path={value.poster_path} 
                                            vote_average={value.vote_average} 
                                            release_date={value.release_date} />
                                    )):''
                            }
                        </div>
                        <hr/>
                    </div>
                </div>
            </section>
        )
    }
}
