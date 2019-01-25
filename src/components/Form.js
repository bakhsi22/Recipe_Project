import React from 'react';

const Form = props => (
  
// onSubmit is a built in react attribute   

  <form onSubmit={props.getRecipe}>

    <input type="text"  name="recipeName"/>
{/* 
// we cant use this keyword becoz it works only in class based
// components
//here we have a stateless component so we have to pass an 
//argument 
// props => */}

    <button > Search </button>
  </form>
);

export default Form;