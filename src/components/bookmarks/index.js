import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from "axios";
import MovieTile from "../explore/movieTile";

export const Bookmarks = () => {
    
    const bookmarks = useSelector(state => state.bookmarkReducer);
    
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        setMovies(state => []);
        bookmarks.map(movieId => {
            const API_KEY = "93a17f12";
            axios
                .get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
                .then((res) => setMovies(state => [...state, res.data]))
        })
    }, [bookmarks]);
    
    
    return (
        <div>
            <h1>Bookmarks Screen</h1>
            <div className="container-fluid"  style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    movies && movies.map(movie =>
                        <MovieTile key ={movie.imdbID} bookmarked={true} movie={movie}/>
                    )
                }
            </div>
            
        </div>
    );
}
export default Bookmarks;