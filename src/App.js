import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import smallRecipes from './vegan-main-foody.json';

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
  render() {
   let recept1 = smallRecipes.results[0];
    let recept2 = smallRecipes.results[1];
    let recept3 = smallRecipes.results[2];
    let recept4 = smallRecipes.results[3];
    let recept5 = smallRecipes.results[4];
    let recept6 = smallRecipes.results[5];
    let recept7 = smallRecipes.results[6];

    console.log(recept1)

    let recipe = smallRecipes.results[0];

    let imageUrl = recipe.image;
    let title = recipe.title;

    return (
      <div>
        <Container>
           <Row>
            <Col xs="3">
              <Link to={"/recipes"}>
                <img src={"https://spoonacular.com/recipeImages/" + imageUrl} width="100%" />
              </Link>
            </Col>
            <Col xs="auto">{title}</Col>
          </Row>
        </Container>
      </div>
      );
  }
  }

function  Recipes(){
    return (
      <div>
        <h1>THE NAME OF THE INCOMING RECIPIE</h1>
      </div>

      );
  }

export default App;
