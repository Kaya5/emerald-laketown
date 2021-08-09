import React from "react";
import { Paper } from "@material-ui/core";
import "../styles/HouseTypes.css";

import Button from "@material-ui/core/Button";
import Image from "../components/Image";
import PageTitle from "../components/PageTitle";

function Duplex() {
  return (
    <div className='houseType'>
      <Paper variant="outlined" className="paper">
        <PageTitle text="Duplex" />
      </Paper>

      <Image title="Luxurious" link="https://bit.ly/36vupyZ" />
      <Image title="Affordable" link="https://bit.ly/36uoWs2" />
      <Image title="Central location" link="https://bit.ly/3ib8W3V" />

      <div className="homeLinkDiv">
        <Button href="/" size="large" color="primary" variant='outlined' className="homeLink">
          Go Home 
        </Button>
      </div>
    </div>
  );
}

export default Duplex;
