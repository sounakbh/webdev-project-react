import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MovieTile from "./movieTile";
import MovieDetail from "./movieDetail";
import axios from "axios";

import { ButtonGroup, Button } from "react-bootstrap";

const Explore = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [pages, setPages] = useState(0);
  const [timeoutID, setTimeoutID] = useState();
  const selectedMovieID = useSelector((state) => state);
  const API_KEY = "93a17f12";

  const getMovies = () => {
    const request_url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&page=1`;
    console.log(request_url);
    axios
      .get(request_url)
      .then((res) => res.data)
      .then((data) => {
        const pages = Math.ceil(data.totalResults / 10);
        console.log(pages);
        setPages(pages);
        setMovieData(data.Search);
      });
  };

  const getNextPage = (pageNumber) => {
    setSearchTerm(searchTerm.replace(" ", "%20"));
    const request_url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}&page=${pageNumber}`;
    console.log(request_url);

    axios
      .get(request_url)
      .then((res) => res.data)
      .then((data) => {
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
              <MovieTile key={movie.imdbID} movie={movie} />
            ))}
        </div>
        {/* {pages && } */}
        {/* <ButtonGroup className="me-2" aria-label="First group">
          {pages > 0 &&
            [...Array(pages)].map((e, i) => (
              <Button key={i} onClick={() => getNextPage(i + 1)}>
                {i + 1}
              </Button>
            ))} */}
        {/* <Button>1</Button> <Button onClick={() => getNextPage(2)}>2</Button>{" "}
          <Button>3</Button> <Button>4</Button> */}
        {/* </ButtonGroup> */}
      </div>
      <div className="col-5" style={{ position: "fixed", right: 0 }}>
        <MovieDetail movieID={selectedMovieID} />
      </div>
    </div>
  );
};
export default Explore;
