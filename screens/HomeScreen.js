import * as React from 'react';
import {Component} from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./Profile/ProfileScreen";
import EventScreen from "./Event/EventScreen";
import ParticipationScreen from "./Participation/ParticipationScreen";
import EditProfileScreen from "./Profile/EditProfileScreen";
import EditEventScreen from "./Event/EditEventScreen";

const Drawer = createDrawerNavigator();

export default class HomeScreen extends Component {

  render() {
    return (
        <Drawer.Navigator initialRouteName="Profile">
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="EditProfile" component={EditProfileScreen} />
          <Drawer.Screen name="Events" component={EventScreen} />
          <Drawer.Screen name="EditEvent" component={EditEventScreen} />
          <Drawer.Screen name="Participations" component={ParticipationScreen} />
        </Drawer.Navigator>
    );
  }
}

