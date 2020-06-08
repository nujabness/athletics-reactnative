import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import  {
  EventScreen,
  ProfileScreen,
  ParticipationScreen
} from "./screens";

const DrawerNavigatior = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
      drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor}/>
    }
  },
  EventScreen: {
    screen: EventScreen,
    navigationOptions: {
      title: "Events",
      drawerIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor}/>
    }
  },
  Participations: {
    screen: ParticipationScreen,
    navigationOptions: {
      title: "Participations",
      drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor}/>
    }
  },
}, {
  drawerWidth: Dimensions.get('window').width * 0.90,
  hideStatusBar: true,
  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: "#f03a5f",
    itemsContainerStyle:{
      marginTop: 16,
      marginHorizontal: 8,
    },
    itemStyle: {
      borderRadius: 4
    }
  }
})

export default createAppContainer(DrawerNavigatior)