import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import MenuAppBar from './MenuAppBar'

import smallRecipes from './vegan-main-foody.json';
import fullRecipes from './vegan-main-foody-all-info-first5.json';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Router>
            <div>
              <Route exact path="/" component={WeekMenu} />
              <Route path="/recipes" component={Recipes} />
            </div>
          </Router>
        </React.Fragment>
    );
  }
}

class WeekMenu extends Component{
  viewSmallRecipes(recipe) {
    let imageUrl = recipe.image;
    let title = recipe.title;

    return (
      <div>
        <div>
          <Link to={"/recipes"}>
            <img src={"https://spoonacular.com/recipeImages/" + imageUrl} width="100%" />
          </Link>
        </div>
        <div>{title}</div>
      </div>
    )
  }

  render() {
    let numberOfRecipes = smallRecipes.results.length;
    console.log("numberOfRecipes: " + numberOfRecipes)

    let randomNumber = Math.floor(Math.random() * numberOfRecipes);
    console.log("randomNumber: " + randomNumber)

    var randomNumbers = [];
    while(randomNumbers.length < 8){
        var r = Math.floor(Math.random() * 100) + 1;
        if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
    }
    console.log(randomNumbers);

    let recept1 = smallRecipes.results[randomNumbers[0]]; //.results[0];
    let recept2 = smallRecipes.results[randomNumbers[1]];
    let recept3 = smallRecipes.results[randomNumbers[2]];
    let recept4 = smallRecipes.results[randomNumbers[3]];
    let recept5 = smallRecipes.results[randomNumbers[4]];
    let recept6 = smallRecipes.results[randomNumbers[5]];
    let recept7 = smallRecipes.results[randomNumbers[6]];

    return (
      <div>
        <MenuAppBar />

        <h2>Monday</h2>
        {this.viewSmallRecipes(recept1)}
        <h2>Tuesday</h2>
        {this.viewSmallRecipes(recept2)}
        <h2>Wednesday</h2>
        {this.viewSmallRecipes(recept3)}
        <h2>Thursday</h2>
        {this.viewSmallRecipes(recept4)}
        <h2>Friday</h2>
        {this.viewSmallRecipes(recept5)}
        <h2>Saturday</h2>
        {this.viewSmallRecipes(recept6)}
        <h2>Sunday</h2>
        {this.viewSmallRecipes(recept7)}
      </div>
      );
  }
}

class Recipes extends Component {
  showAllSteps(steps) {
    let numberOfSteps = steps.length;
    let multipleSteps = [];

    for (var i = 0; i < numberOfSteps; i++) {
       multipleSteps[i] = <li key={steps[i].number}>{steps[i].step}</li>;
    }

    return multipleSteps;
  }

  showAllIngredients(ingredients) {

    let numberOfIngredients = ingredients.length;
    let multipleSteps = [];

    for (var i = 0; i < numberOfIngredients; i++) {
       multipleSteps[i] = <li key={ingredients[i].id}>{ingredients[i].original}</li>;
    }

    return multipleSteps;
  }

  render(){
    //console.log(fullRecipes[0])

    let steps = fullRecipes[0].analyzedInstructions[0].steps;
   let ingredients = fullRecipes[0].extendedIngredients;

    return (
      <div>
      <h1>{fullRecipes[0].title}</h1>
      <p>{fullRecipes[0].servings} servings</p>
      <p>{fullRecipes[0].readyInMinutes} minutes</p>
      <p>{fullRecipes[0].nutrition.nutrients[0].amount} {fullRecipes[0].nutrition.nutrients[0].title} </p>
      <p>{fullRecipes[0].nutrition.nutrients[1].amount} {fullRecipes[0].nutrition.nutrients[1].unit} {fullRecipes[0].nutrition.nutrients[1].title}</p>
      <p>{fullRecipes[0].nutrition.nutrients[3].amount} {fullRecipes[0].nutrition.nutrients[3].unit} {fullRecipes[0].nutrition.nutrients[3].title}</p>
      <p>{fullRecipes[0].nutrition.nutrients[7].amount} {fullRecipes[0].nutrition.nutrients[7].unit} {fullRecipes[0].nutrition.nutrients[7].title}</p>
      <img src={fullRecipes[0].image}/>
      <h2>Ingredients</h2>
     <ul>{this.showAllIngredients(ingredients)}</ul>
     <h2>Instructions</h2>
      <ol>{this.showAllSteps(steps)}</ol>
      </div>
      );
  }
}

export default App;
