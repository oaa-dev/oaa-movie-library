import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="main-header">
          <div className="title">
            <h1>OAAM</h1>
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
    
      <section className="showcase">
        <div className="container">
          <h1>Welcome.</h1>
          <p>Millions of movies, TV shows and people to discover. Explore now.</p>
          <input type="text" placeholder="Search for Movie, TV Shows, People ..." />
        </div>
      </section>

      <section className="">

      </section>
    </div>
  );
}

export default App;
