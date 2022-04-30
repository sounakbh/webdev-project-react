import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createBookmark,
    deleteBookMark,
} from "../../services/bookmark-service";
import {userLikesMovie} from "../../services/movies-likes-service";
import {userDislikesMovie} from "../../services/movies-dislikes-service";

const MovieTile = ({movie, bookmarked, liked, disliked}) => {
    const dispatch = useDispatch();
    const setDetailsHandler = () => {
        dispatch({type: "update-movie-id", movieID: movie.imdbID});
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

    const [likes_active, setLikes_active] = useState(liked);
    useEffect(() => setLikes_active(likes_active), [likes_active]);

    const setLikesHandler = () => {
        if (userName.length > 0) {
            if (!likes_active) {
                userLikesMovie("me", movie.imdbID)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({type: "add_movieLike", movieId: res.data.movieId})
                        }
                    });
            } else {
                userLikesMovie("me", movie.imdbID)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({type: "delete_movieLike", movieId: movie.imdbID})
                        }
                    });
            }
            setLikes_active(!likes_active);
        } else {

        }
    };

    const [dislikes_active, setDislikes_active] = useState(disliked);
    useEffect(() => setDislikes_active(dislikes_active), [dislikes_active]);

    const setDislikesHandler = () => {
        if (userName.length > 0) {
            if (!dislikes_active) {
                userDislikesMovie("me", movie.imdbID)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({type: "add_movieDislike", movieId: res.data.movieId})
                        }
                    });
            } else {
                userDislikesMovie("me", movie.imdbID)
                    .then(res => {
                        if (res.status === 200) {
                            dispatch({type: "delete_movieDislike", movieId: movie.imdbID})
                        }
                    });
            }
            setDislikes_active(!dislikes_active);
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
                <img className="img-fluid" src={movie.Poster}/>
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
                    <br/>
                    <br/>
                    <button type="button" className={"btn btn-outline-primary btn-sm " + (likes_active ? 'active' : '')}
                            onClick={setLikesHandler}>
                        {!likes_active && (
                            <i
                                style={{color: "green"}}
                                className="fa fa-thumbs-up"
                                aria-hidden="true"
                            ></i>)}
                        {likes_active && (
                            <i
                                style={{color: "white"}}
                                className="fa fa-thumbs-up"
                                aria-hidden="true"
                            ></i>)}
                    </button>
                    &nbsp;
                    <button type="button"
                            className={"btn btn-outline-primary btn-sm " + (dislikes_active ? 'active' : '')}
                            onClick={setDislikesHandler}>
                        {!dislikes_active && (
                            <i style={{color: "red"}}
                               className="fa fa-thumbs-down"
                               aria-hidden="true"
                            ></i>)}
                        {dislikes_active && (
                            <i
                                style={{color: "white"}}
                                className="fa fa-thumbs-down"
                                aria-hidden="true"
                            ></i>)}
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
