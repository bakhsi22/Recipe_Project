import React from 'react';
import './Toolbar.css';
import '../SideDrawer/DrawerToggleButton.css';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props =>(
    <header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
            < DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        {/* <div className="toolbar__logo"><a href="/">THE LOGO</a></div> */}
        <div className= "toolbar_navigation-items">
          {/* <ul>

          

            <li>
                <button className="toggle-button" onClick={props.click}>
                    About
                </button>
            </li>
            <li><a href="/" onClick={props.click} >About</a></li>
            <li><a href="/" onClick={props.click} >Help</a></li>
          </ul> */}
        </div> 
    </nav>
    </header>
);
  export default Toolbar;