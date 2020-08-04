import React from 'react';
import './styles/App.css';
import ShowInfo from './components/ShowInfo';
import Home from './components/Home';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        
        <Route path="/show/:id" component={ShowInfo} />
        {/* <Route path="/show/:id">
          <ShowInfo />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
