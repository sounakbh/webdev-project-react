import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const API_KEY = "93a17f12";
    console.log("From movie Details: ", movieID);
    axios
      .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setMovieDetails(data);
      });
  }, [movieID]);

  return movieDetails && movieID ? (
    <>
      <div className="card mb-3 ">
        <div className="card-body">
          <h5 className="card-title text-center">{movieDetails.Title}</h5>
          <h6 className="card-subtitle text-muted">
            Starring: {movieDetails.Actors}
          </h6>
        </div>
        <div className="card-body text-center">
          <img className="img-fluid" src={movieDetails.Poster} />
          <p className="card-text">{movieDetails.Plot}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Genre: {movieDetails.Genre}</li>
          <li className="list-group-item">Runtime: {movieDetails.Runtime}</li>
          <li className="list-group-item">
            IMDB Rating: {movieDetails.imdbRating}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default MovieDetail;
