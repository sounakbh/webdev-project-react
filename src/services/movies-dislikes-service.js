import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;
const MOVIES_API = `${BASE_URL}/api/movies`;
const DISLIKES_API = `${BASE_URL}/api/dislikes`;

const api = axios.create({
    withCredentials: true,
});

export const findAllMoviesDislikedByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/movies/dislikes`).then((response) => response);

export const findAllUsersThatDislikedMovie = (mid) =>
    api.get(`${MOVIES_API}/${mid}/dislikes`).then((response) => response);

export const userDislikesMovie = (uid, movieId) => {
    return api
        .put(`${MOVIES_API}/users/${uid}/dislikes/${movieId}`)
        .then((response) => response);
};
export const findTopDislikedMovies = () =>
    api.get(`${DISLIKES_API}/movies`).then((response) => response);
