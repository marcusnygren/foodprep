import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import myData from './vegan-main-foody.json'

class App extends Component {
  render() {
    let recept1 = myData.results[0];

    console.log(recept1)

    let imageUrl = recept1.image;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={"https://spoonacular.com/recipeImages/" + imageUrl} />
          <p>
            {myData.results[0].title}
          </p>
          <div>
            <div></div>
            <div></div>
          </div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
