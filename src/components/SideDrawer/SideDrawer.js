import React from 'react';
import './SideDrawer.css';
// import {render} from "react-dom";
// import {Router, Route} from "react-router";
// import { Link } from "react-router";
// import {Link} from "react-router-dom";
// import {home} from "./components/SideDrawer/home";
// import {BrowserRouter as Router} from 'react-router-dom';
// import Route from 'react-router-dom';

// import about from "../components/SideDrawer";

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return (

        <nav className={drawerClasses}>
            <ul>
                <li>
                    
                       <a> About</a> 
                    
                    <div className="about_text">
                        <p>
                        The Ultimate Cooking Website:  <h3>Recipe Search</h3>
                        Recipe search is a cooking and food website that covers every kind of recipe imaginable.
                        Learn how to make desserts, snacks for the kids, dinner recipes, lunch ideas, breakfast recipes,
                        quick and easy meals, slow cooker recipes, holiday meal ideas and so much more.
                        Plan your weeknight dinners and find yummy weekend brunch recipes with the help of 
                        experts from all around the World.
                        Make meals using seasonal ingredients year-round with Allrecipes Search.
                        <h5>Happy Eating ...</h5>
                        </p>
                    </div>
                </li>
                <li> <a> HELP</a> 
                    <div className="about_text">
                        <ul>Customer Support:

                                <li>To reach Allrecipes Website Customer Support:</li>
                                
                                <li>Email: customersupport@recipesearch.com</li>
                                
                                <li>Phone: 1(888)777-0000</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>


    );

};
export default SideDrawer;


