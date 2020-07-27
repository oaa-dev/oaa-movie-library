import React from 'react';
import './App.css';
import img from "./images/imge1.jpg"

function App() {
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
        <section className="showcase">
          <div className="container">
            <h1>Welcome.</h1>
            <p>Millions of movies, TV shows and people to discover. Explore now.</p>
            <input type="text" placeholder="Search for Movie, TV Shows, People ..." />
          </div>
        </section>

        <section className="movies">
          <div className="container">
            <div className="column odd">
              <div className="header">
                <h2>What's Popular </h2>
                <ul>
                  <li><a>Streaming</a></li>
                  <li><a>On TV</a></li>
                  <li><a>For Rent</a></li>
                  <li><a>In Theaters</a></li>
                </ul>
              </div>
              <div className="movie-list">
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>

                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
                <div className="movie-content" >
                  <img src={img}/>
                  <div>
                    <h3>Harry Potter and the Chamber of Secrets </h3>
                    <p>Nov 13, 2002</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
