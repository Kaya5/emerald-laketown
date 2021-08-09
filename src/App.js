import React, {useState} from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bungalow from "./pages/Bungalow";
import Duplex from "./pages/Duplex";
import Terrace from "./pages/Terrace";
import Apartment from "./pages/Apartment";
import Villa from "./pages/Villa";
import Hotel from "./pages/Hotel";
import Facilities from "./pages/Facilities";
import SideDrawer from './components/SideDrawer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

const clickDrawerClose = () => {
  setDrawerOpen(false); 
};
  let sideDrawer;
  if (drawerOpen) {
    sideDrawer = <SideDrawer closeMenu={clickDrawerClose} />;
  }
  
  return (
    <div className="App">
      <Router>
        <Navbar drawerToggle={toggleDrawerOpen}/>
        {sideDrawer}
      <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/bungalow" render={()=><Bungalow/>} />
          <Route exact path="/duplex" render={()=><Duplex/>} />
          <Route exact path="/terrace" render={()=><Terrace/>} />
          <Route exact path="/apartment" render={()=><Apartment/>} />
          <Route exact path="/villa" render={()=><Villa/>} />
          <Route exact path="/hotel" render={()=><Hotel/>} />
          <Route exact path="/facilities" render={() => <Facilities />} />
          <Route exact path="*" render={()=><Home/>} />
       </Switch>
      </Router>
     
    </div>
  );
}

export default App;
