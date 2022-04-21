import React from "react";
import { useDispatch } from "react-redux";

const MovieTile = ({ movie }) => {
  const dispatch = useDispatch();
  const setDetailsHandler = () => {
    dispatch({ type: "update-movie-id", movieID: movie.imdbID });
  };

  return (
    <div className="card mb-3 text-center" style={{ maxWidth: "70%" }}>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
      </div>
      <div className="card-body">
        <img className="img-fluid" src={movie.Poster} />
      </div>
      <div className="card-body">
        <button
          onClick={setDetailsHandler}
          type="button"
          className="btn btn-outline-primary"
        >
          Learn More
        </button>
        &nbsp;
        <button type="button" className="btn btn-outline-primary">
          <i
            style={{ color: "green" }}
            className="fa fa-thumbs-up"
            aria-hidden="true"
          ></i>
        </button>
        &nbsp;
        <button type="button" className="btn btn-outline-primary">
          <i
            style={{ color: "red" }}
            className="fa fa-thumbs-down"
            aria-hidden="true"
          ></i>
        </button>
        &nbsp;
        <button type="button" className="btn btn-outline-primary">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieTile;
