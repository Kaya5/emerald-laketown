import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";
import { Link } from "react-router-dom";

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

export default Terrace;
