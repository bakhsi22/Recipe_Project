import React from 'react';
import {Link} from "react-router-dom";
const API_KEY="9e733f71085841778fbab780de76000c";

class Recipe extends React.Component{
    state={
        activeRecipe:[]
    }
    // biilt-in method compdidmount is used ,so tha as soon this component 
    //"Recipe" is loaded on screen , 
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        
        const res = await req.json();
        // console.log(res.recipes[0]);
        this.setState({activeRecipe:res.recipes[0]});
        console.log(this.state.activeRecipe)
      }
    
    render() {
        const recipe = this.state.activeRecipe;
        // console.log(this.props); 
        return (
            <div className="container">
                    {this.state.activeRecipe.length !==0 &&
                    <div className="active-recipe">
                        <img className="active-recipe__img" 
                        src={recipe.image_url} 
                        alt={recipe.title} />
                        <h5 className="active-recipe__title">{recipe.title}</h5>
                        <h4 className="active-recipe__publisher">
                            Publisher: <span>{recipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to ="/">GO HOME</Link>                        
                        </button>
                    </div>

                }
            </div>
        );
    }
};

export default Recipe;