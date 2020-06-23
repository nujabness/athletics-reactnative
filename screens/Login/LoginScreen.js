import React, { Component } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet, Button,
} from "react-native";
import { connect } from "react-redux";

import FadeSlide from "../../animations/FadeSlide/FadeSlide";
import LoginForm from "../../components/Form/LoginForm";

import COLORS from "../../utils/colors";
import { loginSuccess } from "../../store/actions/app";
import axios from "../../http-common";

class LoginScreen extends Component {
	handleLoginFormSubmit = values => {
		axios
			.post('/login',
				{
					email: values.email,
					password: values.password,
				},
				{
					timeout: 10000,
				}
			)
			.then(response => {
				if (response.status === 200) {
					this.props.loginSuccess({
						token: response.data.token,
						_id: response.data.user._id,
						role: response.data.user.role,
						nom_athlete: response.data.user.nom_athlete,
						prenom_athlete: response.data.user.prenom_athlete,
						sexe_athlete: response.data.user.sexe_athlete,
						nationalite_athlete: response.data.user.nationalite_athlete
					})
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

	componentDidUpdate() {
		const { user } = this.props;
		if (user && user.token) {
			this.props.navigation.navigate('Athletics')
		}
	}

	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<FadeSlide delay={150}>
						<View style={styles.loginFormBox}>
							<LoginForm
								onSubmit={this.handleLoginFormSubmit} />
							{this.props.loading && (
								<View style={styles.loadingContainer}>
									<ActivityIndicator
										animating={true}
										hidesWhenStopped={false}
										size="large"
										color={COLORS.purple} />
								</View>
							)}
							{this.props.error && (
								<Text style={styles.errorMessage}>
									{this.props.error}
								</Text>
							)}
						</View>
						<Button
							title="Register"
							onPress={() => this.props.navigation.navigate('Register')}/>
					</FadeSlide>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screenContentWrapper: {
		flex: 1,
		backgroundColor: COLORS.red,
		justifyContent: "center",
	},
	contentBox: {
		marginHorizontal: 50,
	},
	logo: {
		height: undefined,
		width: "80%",
		aspectRatio: 507 / 102,
		marginLeft: "10%",
		marginBottom: 30,
	},
	loginFormBox: {
		backgroundColor: "#ffffff",
		borderRadius: 5,
		paddingVertical: 30,
		paddingHorizontal: 15,
		marginBottom: 30,
		elevation: 25,
	},
	creditsContainer: {
		position: "absolute",
		bottom: 20,
		left: 5,
		right: 5,
	},
	creditsText: {
		textAlign: "center",
		color: "rgba(255,255,255,.25)",
		fontSize: 10,
	},
	loadingContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(255,255,255,.85)",
		justifyContent: "center",
	},
	errorMessage: {
		fontSize: 11,
		marginTop: 20,
		fontStyle: "italic",
		color: COLORS.red,
	},
});

const mapStateToProps = state => ({
	user: state.app.user,
});

const mapDispatchToProps = dispatch => {
	return {
		loginSuccess: (data) => dispatch(loginSuccess(data)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen);
