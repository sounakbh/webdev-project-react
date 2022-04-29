import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MovieDetail = ({ movieID }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const API_KEY = "93a17f12";
    axios
      .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`)
      .then((res) => res.data)
      .then((data) => {
        setMovieDetails(data);
      });
  }, [movieID]);

  return movieDetails && movieID ? (
    <div className="card mb-3 shadow">
      <div className="text-right">
        <div className="card-header">
          <button
            onClick={() => navigate(`/explore/movie/${movieID}`)}
            type="button"
            className="btn btn-outline-primary btn-sm"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="card-body">
        <i
          onClick={() => dispatch({ type: "update-movie-id", movieID: "" })}
          className="fa fa-times"
          aria-hidden="true"
        ></i>

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
    </div>
  ) : (
    <></>
  );
};

export default MovieDetail;
