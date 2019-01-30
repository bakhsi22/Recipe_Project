import React from 'react';

const API_KEY="9e733f71085841778fbab780de76000c";

class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }
    componentDidMount = async()=>{
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        
        const res = await req.json();
        console.log(res);
      }
    
    render() {
        // console.log(this.props);
        return (
            <div>
                RecipeComponent !
            </div>
        );
    }
}

export default Recipe;