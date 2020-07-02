import React, { Component } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import FadeSlide from "../../animations/FadeSlide/FadeSlide";
import COLORS from "../../utils/colors";
import EditEventForm from "../../components/Form/EditEventForm";
import DataService from "../../services/http.service";
import {connect} from "react-redux";

console.disableYellowBox = true;

class  CreateEventScreen extends Component {
    handleEditFormSubmit = values => {
        let headers = {
            headers: {
                Authorization: 'Bearer ' + this.props.user.token
            }
        }
        let body = {
            nom_epreuve: values.nom_epreuve,
            type_epreuve: values.type_epreuve,
            phase_epreuve: values.phase_epreuve,
            date_epreuve: values.date_epreuve
        }
        DataService.createEvents(body, headers).then(response => {
            this.props.navigation.navigate('Events')
        }).catch(e => {
            console.log(e);
        });
    };

    render(){
      return (
          <View style={styles.screenContentWrapper}>
              <View style={styles.contentBox}>
                  <FadeSlide delay={150}>
                      <View style={styles.loginFormBox}>
                          <Text>Create Event</Text>
                          <EditEventForm
                              onSubmit={this.handleEditFormSubmit}/>
                          {this.props.error && (
                              <Text style={styles.errorMessage}>
                                  {this.props.error}
                              </Text>
                          )}
                      </View>
                      <Button
                          title="Back Events"
                          onPress={() => this.props.navigation.navigate('Events')}/>
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
)(CreateEventScreen);
