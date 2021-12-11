import React from "react";
import { Link } from "react-router-dom";

import "../styles/Facilities.css";
import Button from "@material-ui/core/Button";
import splash from "../assets/splash.mp4";
import salon from "../assets/salon.mp4";
import golf from "../assets/golf.mp4";
import mall from "../assets/mall.mp4";
import park from "../assets/park.mp4";
import electricity from "../assets/electricity.mp4";

import Video from "../components/Video";

export default function Facilities() {
  return (
    <div className="facPage">
      <div className="facText">Our amazing facilities at Emerald LakeTown</div>
      <main className="facilities">
        <div className="line1">
          <Video source={splash} caption="Waterways" />
          <Video source={golf} caption="Golf course" />
          <Video source={mall} caption="Shopping Mall" />

          <Video source={park} caption="Recreational park" />
          <Video source={electricity} caption="24-hour electricity" />
          <Video source={salon} caption="Salon" />
        </div>
      </main>
      <div className="backDiv">
        <Button
          size="large"
          color="primary"
          variant="contained"
          className="back"
        >
          <Link to='/' className='button-text'>
          Back
          </Link>
       
        </Button>
      </div>
    </div>
  );
}
