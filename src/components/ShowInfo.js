import React, { Component } from 'react'
import axios from 'axios';
import '../styles/ShowInfo.css';
import MovieList from './MovieList';
import { FaStar, FaTv } from "react-icons/fa";

export default class ShowInfo extends Component {
    constructor(props){
        super(props);
        
        this.state = { movies : null, recommendations : null }
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7aea42c3d4b351d11ef26f33331883cb&language=en-US`)
        .then(res => {
            //   console.log(res)
            const movies = res.data;
            this.setState({ movies });
        })

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}/recommendations?api_key=7aea42c3d4b351d11ef26f33331883cb&language=en-US&page=1
        `)
        .then(res => {
            //   console.log(res)
            const recommendations = res.data;
            this.setState({ recommendations });
        })
    }


    render() {
      // const {poster_path} = this.state.movies;
      

      console.log('movie', this.state.movies);
        return (
          <div className="App">
              <header className="main-header">
                  <div className="title">
                      <h1>MOVIES</h1>
                      <nav>
                          <ul>
                              <li><a>Movies</a></li>
                              <li><a>TV Shows</a></li>
                              <li><a>People</a></li>
                              <li><a>More</a></li>
                          </ul>
                      </nav>
                  </div>
                  <div className="search">
                      <a> Search </a>
                  </div>
              </header>

              <main>
                {
                  (this.state.movies)?
                    <section className="showInfo">
                      <div className="movie-img">
                        <img src={`https://image.tmdb.org/t/p/w500/${this.state.movies.poster_path}`}/>
                      </div>
                      <div className="movie-info">
                        <h1><FaTv/> { this.state.movies.original_title }</h1>
                        <p>{ this.state.movies.release_date } / <FaStar/> { this.state.movies.popularity } / { this.state.movies.status } </p>
                        <div>
                          <p>"{ this.state.movies.tagline }"</p>
                          <h3>OVERVIEW</h3>
                          <p>{ this.state.movies.overview }</p>
                        </div>
                      </div>
                    </section>:''
                }

                <MovieList title = "What's Popular" categories = {['movie', 'tv', 'all']}  />
                
              </main>
          </div>    
        )
    }
}
