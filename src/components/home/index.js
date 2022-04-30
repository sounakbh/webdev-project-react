import React from "react";
import { useEffect, useState } from "react";

import * as likeService from "../../services/movies-likes-service";
import * as dislikeService from "../../services/movies-dislikes-service";

import MovieCard from "./movieCard";

const Home = () => {
  const [dislikedMovies, setDislikedMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(() => {
    likeService.findTopLikedMovies().then(({ data }) => setLikedMovies(data));

    dislikeService
      .findTopDislikedMovies()
      .then(({ data }) => setDislikedMovies(data));
  }, []);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-6 text-center">
          <h3>
            Top Liked <i className="fa fa-thumbs-up" aria-hidden="true"></i>
          </h3>
          {likedMovies &&
            likedMovies.map((movie) => <MovieCard movie={movie} />)}
        </div>
        <div className="col-6 text-center">
          <h3>
            Top Disliked{" "}
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
          </h3>
          {dislikedMovies &&
            dislikedMovies.map((movie) => <MovieCard movie={movie} />)}
        </div>
      </div>
    </div>
  );
};
export default Home;
