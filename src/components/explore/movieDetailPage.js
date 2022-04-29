import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieID } = useParams();

  useEffect(() => {
    const API_KEY = "93a17f12";
    axios
      .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`)
      .then((res) => res.data)
      .then((data) => {
        setMovieDetails(data);
      });
  }, [movieID]);

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="card mb-3 shadow col-6">
        <div className="card-body">
          <h5 className="card-title text-center">{movieDetails.Title}</h5>
          <h6 className="card-subtitle text-muted text-center">
            Starring: {movieDetails.Actors}
          </h6>
        </div>
        <div className="card-body text-center">
          <img className="img-fluid" src={movieDetails.Poster} />
          <p className="card-text">{movieDetails.Plot}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Genre:</b> {movieDetails.Genre}
          </li>
          <li className="list-group-item">
            <b>Runtime:</b> {movieDetails.Runtime}
          </li>
          <li className="list-group-item">
            <b>IMDB Rating:</b> {movieDetails.imdbRating}
          </li>
          <li className="list-group-item">
            <b>Awards:</b> {movieDetails.Awards}
          </li>
          <li className="list-group-item">
            <b>Runtime:</b> {movieDetails.Runtime}
          </li>
          <li className="list-group-item">
            <b>Year:</b> {movieDetails.Year}
          </li>
          <li className="list-group-item">
            <b>Writer:</b> {movieDetails.Writer}
          </li>
          <li className="list-group-item">
            <b>Box Office:</b> {movieDetails.BoxOffice}
          </li>
        </ul>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default MovieDetailPage;
