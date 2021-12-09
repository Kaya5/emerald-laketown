import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/Home.css";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <div className="homepage">
      <div>
        <div>
          <h1 id="heading">Welcome to Emerald LakeTown</h1>
          <p className="eltParagraph">
            Own landed property at one of the most luxurious and exclusive
            neighbourhoods in town. Emerald LakeTown currently has 2548
            apartment units, 544 terrace houses, 333 bungalows, 250 duplexes, 89
            villas, and 5 hotels, and is still developing rapidly. Property
            prices have been rising exponentially and are projected to witness
            as much as a 12% increase by <b>2025</b>. The town is 15 minutes
            from the city centre and offers a great ROI. Now is the time to
            become a home owner by investing in Emerald LakeTown.
          </p>
        </div>
        <div className="enter">
          <Button
            Link to="/facilities"
            variant="contained"
            color="primary"
            size="small"
            className="enterLink"
          >
            <Grid container direction="row">
              Facilities
            </Grid>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
