import React from 'react';
import MovieList from './MovieList';
import Collection from './Collection';


const Home = () => {
    return(
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
                <section className="showcase">
                    <div className="container">
                        <h1>Welcome.</h1>
                        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                        <input type="text" placeholder="Search for Movie, TV Shows, People ..." />
                    </div>
                </section>
                
                <MovieList title = "What's Popular" categories = {['movie', 'tv', 'all']}  />
                    
                <Collection/>

            </main>
        </div>
    );
}

export default Home;