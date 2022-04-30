const initialState = {
	username: '',
	roleId: undefined
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'login':
			return {
				username: action.username,
				roleId: action.roleId
			};
		case 'logout':
			return {
				username: '',
				roleId: undefined
			};
		default: return state;
	}
	
}

export default userReducer;