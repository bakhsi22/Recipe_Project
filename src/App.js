import React, { Component } from 'react';
import './App.css';
import Recipes from'./components/Recipes';
import Form from "./components/Form";
    // key
    // https://www.food2fork.com/api/search?key=9e733f71085841778fbab780de76000c&q=shredded%20chicken&count=5
    const API_KEY="9e733f71085841778fbab780de76000c";
    class App extends Component {
    state={
    //setting an array to store api returned 'data'
    recipes:[]
  }
    // we can declare state w/o constructor function  
    getRecipe =async(e) => {
    const recipeName= e.target.elements.recipeName.value;
    e.preventDefault();

    // using async await function to make a call  to the API

    const api_call=await 
    fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`) 
    // console.log(recipeName)
    //to grab data creating new const
    //using await to fetch the API and convert into json
    const data = await api_call.json();
    //as website dont allow local servers to access their data
    //we disable cors :
    //turn off Cross Origin Restrictions in Chrome is to turn off 
    // the feature completely when starting the browser by passing arguments to it.
    // e.g. --disable-web-security 
    // --user-data-dir=~/.chrome-disable-web-security
    // or use cors anywhere that makes it appear to be a live server
    // by including "https://cors-anywhere.herokuapp.com/" before link fetch 
    
    this.setState({recipes:data.recipes}) 
    

  
  }
  render() {
    console.log(this.state.recipes);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        {/* Passing data to another component using props  */}
        <Form getRecipe={this.getRecipe}/>
        {/* //passing recipes state to this recipes component using props
            then mapping over to Recipes component in Recipes.js */}
          <Recipes recipes={this.state.recipe } />
      </div>
    );
  }
}

export default App;
