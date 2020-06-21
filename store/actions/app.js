import axios from "axios";

import {
	LOGIN,
	LOGOUT,
} from "./actionTypes";

/**
 * Try to login: launch the AJAX request and analyze the response
 * @param {string} login
 * @param {string} password
 */
export const loginAction = (email, password) => {
	return (dispatch, getState) => {
		axios
			.post(
				"localhost:8090/",
				{
					username: email,
					password: password,
				},
				{
					timeout: 10000,
				}
			)
			.then(response => {
				if (response.status === 200) {
					dispatch(
						login({
							token: response.data.token,
							id: response.data._id,
							nom_athlete: response.data.nom_athlete,
							prenom_athlete: response.data.prenom_athlete,
							sexe_athlete: response.data.sexe_athlete,
							nationalite_athlete: response.data.nationalite_athlete
						})
					);
				} else {
					console.log("Something went wrong.");
				}
			})
			.catch(error => {
				if (error.response && error.response.status && error.response.status == 403) {
					console.log("This e-mail/password combination is incorrect.")
				} else {
					console.log("Something went wrong.");
				}
			});
	};
};

/**
 * When login is successful, save user data/token
 * @param {object} data The user data coming from WP
 */
export const login = data => {
	return {
		type: LOGIN,
		data,
	};
};



/**
 * Logging out
 */
export const logout = () => {
	return {
		type: LOGOUT,
	};
};

