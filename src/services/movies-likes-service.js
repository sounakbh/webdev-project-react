import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL
    ? process.env.REACT_APP_BASE_URL
    : "http://localhost:4000";
const USERS_API = `${BASE_URL}/api/users`;
const MOVIES_API = `${BASE_URL}/api/movies`;

const api = axios.create({
    withCredentials: true,
});

export const findAllMoviesLikedByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/movies`).then((response) => response);

export const findAllUsersThatLikedMovie = (mid) =>
    api.get(`${MOVIES_API}/${mid}/likes`).then((response) => response);

export const userLikesMovie = (uid, movieId) => {
    return api
        .put(`${MOVIES_API}/users/${uid}/likes/${movieId}`)
        .then((response) => response);
};