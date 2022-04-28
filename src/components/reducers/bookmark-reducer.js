let initialState = [];

const bookmarkReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'add_bookmark':
			return [...state, action.movieId];
		case 'delete_bookmark':
			return state.filter(val => val !== action.movieId);
		case 'all_bookmark':
			return action.bookmarks;
		case 'clear_bookmark': return [];
		default:
			return state;
	}
}

export default bookmarkReducer;