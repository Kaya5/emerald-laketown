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
     <Router basename="/">
        <Navbar drawerToggle={toggleDrawerOpen}/>
        {sideDrawer}
      <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/bungalow" render={()=><Bungalow/>} />
          <Route path="/duplex" render={()=><Duplex/>} />
          <Route path="/terrace" render={()=><Terrace/>} />
          <Route path="/apartment" render={()=><Apartment/>} />
          <Route path="/villa" render={()=><Villa/>} />
          <Route path="/hotel" render={()=><Hotel/>} />
          <Route path="/facilities" render={() => <Facilities />} />
          <Route path="*" render={()=><Home/>} />
       </Switch>
      </Router>
     
    </div>
  );
}

export default App;
