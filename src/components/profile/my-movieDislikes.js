import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MovieTile from "../explore/movieTile";
import axios from "axios";

const MyMovieDislikes = () => {
    const dislikedMovies = useSelector(state => state.movieDislikeReducer);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(state => []);
        dislikedMovies.map(movieId => {
            const API_KEY = "93a17f12";
            axios
                .get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
                .then((res) => setMovies(state => [...state, res.data]))
        })
    }, [dislikedMovies]);

    return (
        <div>
            <h1>Dislikes Screen</h1>
            <div className="container-fluid"  style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    movies && movies.map(movie =>
                        <MovieTile key={movie.imdbID} disliked={true} movie={movie}/>
                    )
                }
            </div>
        </div>
    );
};
export default MyMovieDislikes;
