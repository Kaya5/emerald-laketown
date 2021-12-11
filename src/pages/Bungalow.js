import React from "react";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";
import { Button } from "@material-ui/core";
import Image from "../components/Image";
import PageTitle from '../components/PageTitle'; 
 
function Bungalow() {
  return ( 
    <div className='houseType'>
      <Paper variant="outlined" className="paper">
          <PageTitle text='Bungalow' />
      </Paper>

      <Image title="Affordable" link="https://bit.ly/3yIDEI9" />
      <Image title="Spacious" link="https://bit.ly/3e3xfz8" />
      <Image title="Central location" link="https://bit.ly/3r0hput" />

      <div className="homeLinkDiv">
        <Button
          size="large"
          color="primary"
          variant="outlined"
          className="homeLink"
        >
          <Link to="/" className="home-button-text">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Bungalow;
