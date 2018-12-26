import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import myData from './vegan-main-foody.json'

class App extends Component {
  renderSmallInfo(recipe) {
    let imageUrl = recipe.image;
    let title = recipe.title;

    return (
      <Row>
        <Col xs="3"><img src={"https://spoonacular.com/recipeImages/" + imageUrl} width="100%" /></Col>
        <Col xs="auto">{title}</Col>
      </Row>
    )
  }

  render() {
    let recept1 = myData.results[0];
    let recept2 = myData.results[1];

    console.log(recept1)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Container>
          {this.renderSmallInfo(recept1)}
          {this.renderSmallInfo(recept2)}
        </Container>
      </div>
    );
  }
}

export default App;
