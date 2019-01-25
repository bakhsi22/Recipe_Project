import React from 'react';

//making stateless component

const Recipes =props => (
    //implicity returning js
    <div>
        {props.recipes && props.recipes.map((recipe)=>{
        return(
        //providing the key in the most parent div
        <div key ={recipe.recipe_id}>
            <img src={recipe.image_url} alt={recipe.title}/>
            <p >{ recipe.title }</p>
        </div> 
        // return  <p key ={recipe.recipe_id}>{ recipe.title }</p>
        );
        })}
        {/* Recipes ! */}
    </div>
);

export default Recipes ;