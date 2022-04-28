import React from "react";
import { useDispatch } from "react-redux";

const MovieTile = ({ movie, likeMovie }) => {
  const dispatch = useDispatch();
  const setDetailsHandler = () => {
    dispatch({ type: "update-movie-id", movieID: movie.imdbID });
  };

  return (
    <div
      className="row shadow rounded"
      style={{
        width: "45%",
        margin: "5px",
        padding: "5px",
      }}

    >
      <div className="col-4">
        <img className="img-fluid" src={movie.Poster} />
      </div>
      <div className="col-8">
        <small>
          {movie.Title} <b>({movie.Year})</b>
        </small>
        <div>
          <button
            onClick={setDetailsHandler}
            type="button"
            className="btn btn-outline-primary btn-sm"
          >
            Learn More
          </button>
          <br />
          <br />
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => likeMovie(movie.imdbID)}>
            <i
              style={{ color: "green" }}
              className="fa fa-thumbs-up"
              aria-hidden="true"
            ></i>
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-primary btn-sm">
            <i
              style={{ color: "red" }}
              className="fa fa-thumbs-down"
              aria-hidden="true"
            ></i>
          </button>
          &nbsp;
          <button type="button" className="btn btn-outline-primary btn-sm">
            <i className="fa fa-bookmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
