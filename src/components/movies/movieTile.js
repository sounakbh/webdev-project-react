import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLikesMovie } from "../../services/movies-likes-service";

const MovieTile = ({ movie, liked }) => {
  const dispatch = useDispatch();
  const setDetailsHandler = () => {
    dispatch({ type: "update-movie-id", movieID: movie.imdbID });
  };

  const[likes_active, setLikes_active] = useState(liked);
  useEffect(() => setLikes_active(likes_active), [likes_active]);

  const setLikesHandler = () => {
    if (!likes_active) {
      userLikesMovie( "me", movie.imdbID)
          .then(res => dispatch({type: "add_movieLike", movieId: res.data.movieId}));
    } else {
      userLikesMovie("me", movie.imdbID)
          .then(res => {
            if (res.status === 200) {
              dispatch({type: "delete_movieLike", movieId: movie.imdbID})
            }
          });
    }
    setLikes_active(!likes_active);
  }

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
          <button type="button" className={"btn btn-outline-primary btn-sm "+ (likes_active ? 'active': '')}
                  onClick={setLikesHandler}>
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
