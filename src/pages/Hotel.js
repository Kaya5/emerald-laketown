import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";
import { Button } from "@material-ui/core";

import Image from "../components/Image";
import PageTitle from "../components/PageTitle";

function Hotel() {
  return (
    <div className="houseType">
      <Paper variant="outlined" className="paper">
        <PageTitle text="Hotel" />
      </Paper>

      <Image title="Stunning views" link="https://bit.ly/36nvAQK" />
      <Image title="Top-notch services" link="https://bit.ly/3wr5Uxf" />
      <Image title="Easily accessible" link="https://bit.ly/36sBPD6" />

      <div className="homeLinkDiv">
        <Button href="/" size="large" color="primary" variant='outlined' className="homeLink">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Hotel;
