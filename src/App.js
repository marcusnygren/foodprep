import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import smallRecipes from './vegan-main-foody.json'

class App extends Component {
  renderSmallInfo(recipe) {
    let imageUrl = recipe.image;
    let title = recipe.title;

    return (
      <Row>
        <Col xs="3"><a href={recipe.id}><img src={"https://spoonacular.com/recipeImages/" + imageUrl} width="100%" /></a></Col>
        <Col xs="auto">{title}</Col>
      </Row>
    )
  }

  render() {
    let recept1 = smallRecipes.results[0];
    let recept2 = smallRecipes.results[1];
    let recept3 = smallRecipes.results[2];
    let recept4 = smallRecipes.results[3];
    let recept5 = smallRecipes.results[4];
    let recept6 = smallRecipes.results[5];
    let recept7 = smallRecipes.results[6];


    console.log(recept1)

    return (
      <div className="App">
        <header className="App-header">
          <h1>Foody</h1>
        </header>

        <Container>
          {this.renderSmallInfo(recept1)}
          {this.renderSmallInfo(recept2)}
          {this.renderSmallInfo(recept3)}
          {this.renderSmallInfo(recept4)}
          {this.renderSmallInfo(recept5)}
          {this.renderSmallInfo(recept6)}
          {this.renderSmallInfo(recept7)}
        </Container>
      </div>
    );
  }
}

export default App;
