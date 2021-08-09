import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";

import { Button } from "@material-ui/core";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";

function Villa() {
  return (
    <div className="houseType">
      <Paper variant="outlined" className="paper">
        <PageTitle text="Villa" />
      </Paper>
      <Image title="Affordable" link="https://bit.ly/2TNbTQ1" />
      <Image title="Modern Architecture" link="https://bit.ly/3yLzH5g" />
      <Image title="Proximity to city centre" link="https://bit.ly/2T0i42y" />

      <div className="homeLinkDiv">
        <Button href="/" size="large" color="primary" variant='outlined' className="homeLink">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Villa;
