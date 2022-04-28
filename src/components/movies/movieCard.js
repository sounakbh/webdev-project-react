import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import axios from "axios";

const MovieCard = ({ movieID }) => {
    const [movieData, setMovieData] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const API_KEY = "93a17f12";
        axios
            .get(`http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`)
            .then((res) => res.data)
            .then((data) => {
                console.log(data);
                setMovieData(data);
            });
    }, [movieID]);

}
export default MovieCard;