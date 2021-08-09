import React from "react";
import "../styles/DrawerToggle.css";
import MenuIcon from "@material-ui/icons/Menu";

const drawerToggleButton = (props) => (
  <div className="toggleButton" onClick={props.clickMenu}>
    <div className="openButton">
      <MenuIcon fontSize='large' clickMenu={props.drawerToggle} />
    </div>
  </div>
);
export default drawerToggleButton;
