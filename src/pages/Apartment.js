import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";

import Button from "@material-ui/core/Button";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";

function Apartment() {
  return (
    <div className='houseType'>
      <Paper variant="outlined" className="paper">
        <PageTitle text="Apartment" />
      </Paper>

        <Image title="Modern Architecture" link="https://bit.ly/3hWgN4V" />
        <Image title="Serviced Apartments" link="https://bit.ly/3hOfR2E" />
        <Image title="State of the art facilities" link="https://bit.ly/3r4QHAX"/>

      <div className="homeLinkDiv">
        <Button
          href="/"
          size="large"
          color="primary"
          variant="outlined"
          className="homeLink"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Apartment;
