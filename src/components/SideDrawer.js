import React from "react";
import { Link } from "react-router-dom";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import HomeIcon from "@material-ui/icons/Home";

import "../styles/SideDrawer.css";

function SideDrawer(props) {
  return (
    <nav className="sideDrawer">
      <>
        <div id="menuDiv">
          {" "}
          <ArrowLeftIcon onClick={props.closeMenu} id="menu" />
        </div>

        <div className="sideLinks">
          <Link exact to="/" className="sideHome" onClick={props.closeMenu}>
            <HomeIcon fontSize="large" />
          </Link>

          <Link
            exact
            to="/apartment"
            className="side"
            onClick={props.closeMenu}
          >
            Apartment
          </Link>

          <Link to="/bungalow" className="side" onClick={props.closeMenu}>
            Bungalow
          </Link>

          <Link to="/duplex" className="side" onClick={props.closeMenu}>
            Duplex
          </Link>

          <Link to="/hotel" className="side" onClick={props.closeMenu}>
            Hotel
          </Link>

          <Link to="/terrace" className="side" onClick={props.closeMenu}>
            Terrace
          </Link>

          <Link to="/villa" className="side" onClick={props.closeMenu}>
            Villa
          </Link>
        </div>
      </>
    </nav>
  );
}

export default SideDrawer;
