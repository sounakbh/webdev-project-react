import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MovieTile from "../explore/movieTile";
import axios from "axios";

const MyMovieLikes = () => {
    const likedMovies = useSelector(state => state.movieLikeReducer);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(state => []);
        likedMovies.map(movieId => {
            const API_KEY = "93a17f12";
            axios
                .get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
                .then((res) => setMovies(state => [...state, res.data]))
        })
    }, [likedMovies]);

    return (
        <div>
            <h1>Likes Screen</h1>
            <div className="container-fluid"  style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    movies && movies.map(movie =>
                        <MovieTile key={movie.imdbID} liked={true} movie={movie}/>
                    )
                }
            </div>
        </div>
    );
};
export default MyMovieLikes;
