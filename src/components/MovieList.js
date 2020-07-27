import React, { Component } from 'react'
import axios from 'axios';

export default class MovieList extends Component {
    constructor(props){
        console.log("constructor")
        super(props);
        
        this.state = { movies : null }
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

    render() {
        console.log(this.state.movies)
        return (
            <div className="movie-list">
                {
                this.state.movies !== null ?  
                    this.state.movies.results.map((value, index)=>(
                        <div className="movie-content" key={value.id} >
                            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt={value.title} />
                            <div>
                                <h3>{value.title}</h3>
                                <p>{value.release_date}</p>
                            </div>
                        </div>
                    ))
                :<p>No Records</p>}
            </div>
        )
    }
}
