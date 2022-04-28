import axios from "axios";
// const BASE_URL = "https://cs5500-01-sp22.herokuapp.com/api";
// const BASE_URL = "http://localhost:4000/api";
const BASE_URL = process.env.REACT_APP_BASE_URL
	? process.env.REACT_APP_BASE_URL
	: "http://localhost:4000";

const BOOKMARK_API = `${BASE_URL}/api/bookmarks`;

const api = axios.create({
	withCredentials: true,
});

export const createBookmark = (userId, movieId) => {
	return api.post(BOOKMARK_API, {userId, movieId});
}

export const findAllBookMarks = (userId) => {
	return api.get(`${BOOKMARK_API}/${userId}`);
}

export const deleteBookMark = (userId,  movieId) => {
	return api.delete(`${BOOKMARK_API}/${userId}/${movieId}`);
}