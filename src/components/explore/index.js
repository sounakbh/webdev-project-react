import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MovieTile from "./movieTile";
import MovieDetail from "./movieDetail";
import axios from "axios";
const Explore = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [pages, setPages] = useState(0);
  const [timeoutID, setTimeoutID] = useState();
  const selectedMovieID = useSelector((state) => state.movieidReducer);
  const bookmarks = useSelector((state => state.bookmarkReducer));

  const getMovies = () => {
    const API_KEY = "93a17f12";
    console.log("Get Movies Hit");
    axios
      .get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then((res) => res.data)
      .then((data) => {
        const pages = Math.ceil(data.totalResults / 10);
        setPages(pages);
        setMovieData(data.Search);
      });
  };

  const debounce = (cb, delay = 500) => {
    return (...args) => {
      clearTimeout(timeoutID);
      setTimeoutID(
        setTimeout(() => {
          cb(...args);
        }, delay)
      );
    };
  };

  const updateDebounceText = debounce(getMovies);

  const processChange = (e) => {
    setSearchTerm(e.target.value);
    updateDebounceText();
  };

  return (
    <div className="row mt-2">
      <div className="col-7">
        <input
          style={{ backgroundColor: "white", color: "black" }}
          onKeyUp={processChange}
          className="form-control round"
          placeholder="Search a Movie"
          aria-describedby="emailHelp"
        ></input>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movieData &&
            movieData.map((movie) => (
              <MovieTile key={movie.imdbID} movie={movie} bookmarked={bookmarks.includes(movie.imdbID)} />
            ))}
        </div>
      </div>
      <div className="col-5" style={{ position: "fixed", right: 0 }}>
        <MovieDetail movieID={selectedMovieID} />
      </div>
    </div>
  );
};
export default Explore;
