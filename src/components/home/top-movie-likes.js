import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MovieTile from "../explore/movieTile";
import axios from "axios";
import * as service from "../../services/movies-likes-service";

const TopMovieLikes = () => {
    const [likedMovies, setLikedMovies] = useState([]);
    const findTopLikedMovies = () => service.findTopLikedMovies().then((movies) => setLikedMovies(movies));
    const [movies, setMovies] = useState([]);

    useEffect(findTopLikedMovies, []);
    useEffect(() => {
        setMovies(state => []);
        likedMovies.map(movie => {
            const API_KEY = "93a17f12";
            axios
                .get(`http://www.omdbapi.com/?i=${movie.movieId}&apikey=${API_KEY}`)
                .then((res) => setMovies(state => [...state, res.data]))
        })
    }, [likedMovies]);

    console.log(movies);
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
export default TopMovieLikes;
