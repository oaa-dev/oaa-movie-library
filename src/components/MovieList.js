import React, { Component } from 'react'
import axios from 'axios';
import '../styles/MovieList.css'
import Card from './Card';

export default class MovieList extends Component {
    constructor(props){
        console.log("constructor")
        super(props);
        
        this.state = { movies : null }
        this.handleClick = this.handleClick.bind()
    }

    componentDidMount(){
        console.log("mount")
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=7aea42c3d4b351d11ef26f33331883cb`)
        .then(res => {
            //   console.log(res)
            const movies = res.data;
            this.setState({ movies });
        })
    }

    handleClick = (field) => {
        axios.get(`https://api.themoviedb.org/3/trending/${field}/week?api_key=7aea42c3d4b351d11ef26f33331883cb`)
        .then(res => {
            //   console.log(res)
            const movies = res.data;
            this.setState({ movies });
        })
    }

    render() {
        console.log(this.state.movies)
        return (
            <section className="movies">
                <div className="container">
                    <div className="column odd">
                        <div className="header">
                            <h2>{this.props.title}</h2>
                            <ul>
                                {
                                    this.props.categories !== null ? 
                                        this.props.categories.map((value, index)=> (
                                            <li onClick={() => this.handleClick(value)}>{value.toUpperCase()}</li>
                                    )):<span></span>
                                }
                            </ul>
                        </div>
                        <div className="movie-list">
                            {
                            this.state.movies !== null ?  
                                this.state.movies.results.map((value, index)=>(
                                    <Card id={value.id} 
                                        title={value.media_type == 'tv'? value.name : value.title} 
                                        poster_path={value.poster_path} 
                                        vote_average={value.vote_average} 
                                        release_date={value.release_date} />
                                ))
                            :<p>No Records</p>}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
