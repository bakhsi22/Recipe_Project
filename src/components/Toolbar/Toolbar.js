import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props =>(
    <header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
            < DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        {/* <div className="toolbar__logo"><a href="/">THE LOGO</a></div> */}
        <div className= "toolbar_navigation-items">
          <ul>
            {/* <li><a href="/">Products</a></li> */}
            <li><a href="/">About</a></li>
            <li><a href="/">Help</a></li>
          </ul>
        </div>
    </nav>
    </header>
);
  export default Toolbar;