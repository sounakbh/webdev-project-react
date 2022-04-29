let initialState = [];

const movieLikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_movieLike':
            return [...state, action.movieId];
        case 'delete_movieLike':
            return state.filter(val => val !== action.movieId);
        case 'all_likes':{
            return action.likedMovies;
        }
        case 'clear_movieLike': return [];
        default:
            return state;
    }
}

export default movieLikeReducer;