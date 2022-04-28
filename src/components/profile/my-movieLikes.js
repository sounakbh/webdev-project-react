import * as service from "../../services/movies-likes-service";
import {useEffect, useState} from "react";
import MovieTile from "../movies/movieTile";

const MyMovieLikes = () => {
    const [likedMovies, setLikedMovies] = useState([]);
    const findMoviesILike = () =>
        service.findAllMoviesLikedByUser("me")
            .then((movies) => setLikedMovies(movies));
    useEffect(findMoviesILike, []);
    console.log(likedMovies);

    return(
        <div>
            {likedMovies &&
                likedMovies.map((movie) => (
                    <MovieTile key={movie.imdbID} movie={movie} refreshTuits={findMoviesILike}/>
                ))
            }
        </div>
    );
};
export default MyMovieLikes;