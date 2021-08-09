import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import DrawerToggle from './DrawerToggle';

import HomeIcon from '@material-ui/icons/Home';
function Navbar(props) {
  return (
    <>
      <nav className="navbar">
        <div id='menuToggle'>
        <DrawerToggle clickMenu={props.drawerToggle}/>
        </div>
        <Link to="/">
          <HomeIcon htmlColor="white" id='logo'/>
         </Link>
        <div className="navbarItems">

        <Link exact to="/apartment" className='navbarItem'>
           Apartment
          </Link>

          <Link exact to="/bungalow" className='navbarItem'>
            Bungalow
          </Link>

          <Link exact to="/duplex" className='navbarItem'>
           Duplex
          </Link>


          <Link exact to="/hotel" className='navbarItem'>
           Hotel
          </Link>

          <Link exact to="/terrace" className='navbarItem'>
           Terrace
          </Link>

          <Link exact to="/villa" className='navbarItem'>
           Villa
          </Link>

        </div>
      </nav> 

     
    </>
  );
}

export default Navbar;
