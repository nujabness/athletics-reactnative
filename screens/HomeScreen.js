import * as React from 'react';
import {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./Profile/ProfileScreen";
import EventScreen from "./Event/EventScreen";
import ParticipationScreen from "./Participation/ParticipationScreen";
import EditProfileScreen from "./Profile/EditProfileScreen";
import EditEventScreen from "./Event/EditEventScreen";
import CreateEventScreen from "./Event/CreateEventScreen";
import UserScreen from "./User/UserScreen";
import {connect} from "react-redux";
import {logout} from "../store/actions/app";

const Drawer = createDrawerNavigator();

class HomeScreen extends Component {

    componentDidMount() {
        console.log(this.props.user)
    }

    render() {
    return (
        <Drawer.Navigator initialRouteName="Profile">
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
          <Drawer.Screen name="Events" component={EventScreen} />
          <Drawer.Screen name="EditEvent" component={EditEventScreen} />
          <Drawer.Screen name="CreateEvent" component={CreateEventScreen} />
          <Drawer.Screen name="Participations" component={ParticipationScreen} />
          <Drawer.Screen name="Users" component={UserScreen} />
        </Drawer.Navigator>
    );
  }
}

const mapStateToProps = state => ({
    user: state.app.user,
});

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);


