import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";

import Button from "@material-ui/core/Button";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";

function Terrace() {
  return (
    <div className="houseType">
      <Paper variant="outlined" className="paper">
        <PageTitle text="Terrace" />
      </Paper>

      <Image title="Smart investment" link="https://bit.ly/3r0h1ME" />
      <Image title="Secure neighbourhood" link="https://bit.ly/3r23qV9" />
      <Image title="City centre" link="https://bit.ly/3xscHYW" />

      <div className="homeLinkDiv">
        <Button href="/" size="large" color="primary" variant='outlined' className="homeLink">
          Go Home
        </Button>
      </div>
    </div>
  );
}

export default Terrace;
