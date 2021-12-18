import React from "react";
import "../styles/HomeScreen.css";
import Nav from "./Nav.js";
import Banner from "./Banner.js";


function HomeScreen() {
  return (
    <div className="HomeScreen">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner/>

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
