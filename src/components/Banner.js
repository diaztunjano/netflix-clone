import React, { useEffect, useState } from "react";
import "../styles/Banner.css";
import axios from "../helpers/axios";
import requests from "../helpers/Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData(params) {
      const request = await axios.get(requests.fetchNetlfixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div class="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 class="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
