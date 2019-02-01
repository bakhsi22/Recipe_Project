import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton= props =>(
    <div className="toggle-button2">
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
      
    </button>
    {/* <button className="toggle-button" onClick={props.click1}>
                    About
    </button>
    <button className="toggle-button" onClick={props.click2}>
                    Help
    </button> */}
    
    {/* <button className="toggle-button2" onClick={props.click}>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
        <div className="toggle-button__line"/>
      
    </button> */}
    </div>
);
export default DrawerToggleButton;