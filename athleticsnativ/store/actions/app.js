import {
	LOGIN,
	LOGOUT,
} from "./actionTypes";


export const loginSuccess = data => {
	return {
		type: LOGIN,
		data,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

