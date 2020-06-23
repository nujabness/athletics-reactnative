import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import FadeSlide from "../../animations/FadeSlide/FadeSlide";
import COLORS from "../../utils/colors";
import EditUserForm from "../../components/Form/EditUserForm";
import {connect} from "react-redux";

console.disableYellowBox = true;

class  EditProfileScreen extends Component {
    handleEditFormSubmit = values => {
        console.log(values)
    };

    render(){
      return (
          <View style={styles.screenContentWrapper}>
              <View style={styles.contentBox}>
                  <FadeSlide delay={150}>
                      <View style={styles.loginFormBox}>
                          <EditUserForm
                              user={this.props.user}
                              onSubmit={this.handleEditFormSubmit}/>
                          {this.props.error && (
                              <Text style={styles.errorMessage}>
                                  {this.props.error}
                              </Text>
                          )}
                      </View>
                      <Button
                          title="Back Profile"
                          onPress={() => this.props.navigation.navigate('Profile')}/>
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

export default connect(
    mapStateToProps

)(EditProfileScreen);