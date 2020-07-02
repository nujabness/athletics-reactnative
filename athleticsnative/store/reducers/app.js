import {
	LOGIN,
	LOGOUT,
} from "../actions/actionTypes";

const initialState = {
	user: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN: {
			return {
				...state,
				user: {
					...action.data,
				},
			};
		}
		case LOGOUT: {
			return {
				...state,
				user: { ...initialState.user },
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
