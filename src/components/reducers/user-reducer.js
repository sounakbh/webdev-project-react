const initialState = {
	username: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'login':
			return {
				username: action.username
			};
		case 'logout':
			return {
				username: ''
			};
		default: return state;
	}
	
}

export default userReducer;