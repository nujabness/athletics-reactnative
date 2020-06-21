import React, { Component } from "react";
import {
	View,
	ActivityIndicator,
	StyleSheet, Button,
} from "react-native";
import { Text } from "native-base";
import { connect } from "react-redux";

import FadeSlide from "../../animations/FadeSlide/FadeSlide";

import COLORS from "../../utils/colors";
import DataService from "../../services/http.service";
import RegisterForm from "../../components/Form/RegisterForm";

class RegisterScreen extends Component {
	handleRegisterFormSubmit = values => {
		this.register(values.email, values.password);
	};

	register(email, password) {
		let body = {
			email: email,
			password: password
		}
		DataService.register(body).then(response => {
			console.log(response)
			if(response.status == 200) {
				this.props.navigation.navigate('Login')
			} else {
				console.log("ELSE")
			}
		}).catch(e => {
			console.log(e);
		});
	}

	render() {
		return (
			<View style={styles.screenContentWrapper}>
				<View style={styles.contentBox}>
					<FadeSlide delay={150}>
						<View style={styles.loginFormBox}>
							<RegisterForm
								onSubmit={this.handleRegisterFormSubmit}/>
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
							title="Login"
							onPress={() => this.props.navigation.navigate('Login')}/>
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

});

const mapDispatchToProps = dispatch => {
	return {

	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterScreen);
