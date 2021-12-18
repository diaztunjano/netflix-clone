import React from "react";
import "../styles/Banner.css";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__title">Movie Name</h1>
        <div class="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 class="banner__description">This is test description</h1>
      </div>

      <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
