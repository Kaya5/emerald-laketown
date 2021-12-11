import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";
import Button from "@material-ui/core/Button";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

function Apartment() {
  return (
    <div className="houseType">
      <Paper variant="outlined" className="paper">
        <PageTitle text="Apartment" />
      </Paper>

      <Image title="Modern Architecture" link="https://bit.ly/3hWgN4V" />
      <Image title="Serviced Apartments" link="https://bit.ly/3hOfR2E" />
      <Image
        title="State of the art facilities"
        link="https://bit.ly/3r4QHAX"
      />

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

export default Apartment;
