import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import smallRecipes from './vegan-main-foody.json';
import fullRecipes from './vegan-main-foody-all-info-first5.json';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={WeekMenu} />
          <Route path="/recipes" component={Recipes} />
        </div>
      </Router>
    );
  }
}

class WeekMenu extends Component{
  viewSmallRecipes(recipe) {
    let imageUrl = recipe.image;
    let title = recipe.title;

    return (
      <Row>
        <Col xs="3">
          <Link to={"/recipes"}>
            <img src={"https://spoonacular.com/recipeImages/" + imageUrl} width="100%" />
          </Link>
        </Col>
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



    let recipe = smallRecipes.results[0];

    return (
      <div>
        <Container>
          {this.viewSmallRecipes(recept1)}
          {this.viewSmallRecipes(recept2)}
          {this.viewSmallRecipes(recept3)}
          {this.viewSmallRecipes(recept4)}
          {this.viewSmallRecipes(recept5)}
          {this.viewSmallRecipes(recept6)}
          {this.viewSmallRecipes(recept7)}
        </Container>
      </div>
      );
  }
}

class Recipes extends Component {
  showAllSteps(steps) {
    console.log(steps[0]);

    let numberOfSteps = steps.length;
    let multipleSteps = [];

    for (var i = 0; i < numberOfSteps; i++) {
       multipleSteps[i] = <li key={steps[i].number}>{steps[i].step}</li>;
    }

    return multipleSteps;
  }

  render(){
    //console.log(fullRecipes[0])

    let steps = fullRecipes[0].analyzedInstructions[0].steps;

    return (
      <div>
      <h1>{fullRecipes[0].title}</h1>
      <ol>{this.showAllSteps(steps)}</ol>
      </div>
      );
  }
}

export default App;
