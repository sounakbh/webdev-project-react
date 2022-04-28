import axios from "axios";

// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com";
const BASE_URL = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:4000";

const MOVIES_API = `${BASE_URL}/api/movies`;

const api = axios.create({
    withCredentials: true,
});

export const findAllMovies = () =>
    api.get(MOVIES_API).then((response) => response.data);

export const findMovieById = (mid) =>
    api.get(`${MOVIES_API}/${mid}`).then((response) => response.data);

export const findMovieByOmdbId = (movieId) =>
    api.get(`${MOVIES_API}/${movieId}`).then((response) => response.data);

export const createMovie = (movie) =>
    api.post(`${MOVIES_API}`, movie).then((response) => response.data);

export const updateMovie = (mid, movie) =>
    api.post(`${MOVIES_API}/${mid}`, movie).then((response) => response.data);

export const deleteMovie = (mid) =>
    api.delete(`${MOVIES_API}/${mid}`).then((response) => response.data);
