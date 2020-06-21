import http from "../../http-common";

import {
	LOGIN,
	LOGOUT,
} from "./actionTypes";

export const login = (email, password) => {
	return (dispatch, getState) => {
		http
			.post('/login',
			{
					email: email,
					password: password,
			 	  },
			 {
					timeout: 10000,
				   }
			)
			.then(response => {
				if (response.status === 200) {
					dispatch(
						loginSuccess({
							token: response.data.user.token,
							id: response.data.user._id,
							nom_athlete: response.data.user.nom_athlete,
							prenom_athlete: response.data.user.prenom_athlete,
							sexe_athlete: response.data.user.sexe_athlete,
							nationalite_athlete: response.data.user.nationalite_athlete
						})
					);
				} else {
					console.log("Something went wrong.");
				}
			})
			.catch(error => {
				console.log(error)
				if (error.response && error.response.status && error.response.status == 403) {
					console.log("This e-mail/password combination is incorrect.")
				} else {
					console.log("Something went wrong.");
				}
			});
	};
};

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

