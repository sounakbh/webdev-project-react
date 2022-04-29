import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBookmark,
  deleteBookMark,
} from "../../services/bookmark-service";

const MovieTile = ({ movie, bookmarked }) => {
  const dispatch = useDispatch();
  const setDetailsHandler = () => {
    dispatch({ type: "update-movie-id", movieID: movie.imdbID });
  };

  const [active, setActive] = useState(bookmarked);

  useEffect(() => setActive(active), [active]);
  const userName = useSelector((state) => state.userReducer.username);

  const setBookmarkHandler = () => {
    if (userName.length > 0) {
      if (!active) {
        createBookmark(userName, movie.imdbID).then((res) =>
          dispatch({ type: "add_bookmark", movieId: res.data.movieId })
        );
      } else {
        deleteBookMark(userName, movie.imdbID).then((res) => {
          if (res.status === 200) {
            dispatch({ type: "delete_bookmark", movieId: movie.imdbID });
          }
        });
      }
      setActive(!active);
    } else {
    }
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
          {!movie.BoxOffice && (
            <button
              onClick={setDetailsHandler}
              type="button"
              className="btn btn-outline-primary btn-sm"
            >
              Learn More
            </button>
          )}
          <br />
          <br />
          <button type="button" className="btn btn-outline-primary btn-sm">
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
          <button
            type="button"
            className={
              "btn btn-outline-primary btn-sm " + (active ? "active" : "")
            }
            onClick={setBookmarkHandler}
          >
            <i className="fa fa-bookmark" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
