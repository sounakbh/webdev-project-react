import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;
const MOVIES_API = `${BASE_URL}/api/movies`;
const LIKES_API = `${BASE_URL}/api/likes`;

const api = axios.create({
    withCredentials: true,
});

export const findAllMoviesLikedByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/movies/likes`).then((response) => response);

export const findAllUsersThatLikedMovie = (mid) =>
    api.get(`${MOVIES_API}/${mid}/likes`).then((response) => response);

export const userLikesMovie = (uid, movieId) => {
    return api
        .put(`${MOVIES_API}/users/${uid}/likes/${movieId}`)
        .then((response) => response);
};
export const findTopLikedMovies = () =>
    api.get(`${LIKES_API}/movies`).then((response) => response);

