let initialState = [];

const movieDislikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_movieDislike':
            return [...state, action.movieId];
        case 'delete_movieDislike':
            return state.filter(val => val !== action.movieId);
        case 'all_dislikes':{
            return action.dislikedMovies;
        }
        case 'clear_movieDislike': return [];
        default:
            return state;
    }
}

export default movieDislikeReducer;