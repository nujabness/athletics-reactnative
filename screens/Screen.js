import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import EventScreen from "./EventScreen";
import ProfileScreen from "./ProfileScreen";
import ParticipationScreen from "./ParticipationScreen";

export default class Screen extends Component {
   render() {
      return (
         <View style={styles.container}>
            <SafeAreaView>
               <TouchableOpacity
                  style={{alignItems: "flex-end", margin: 16, marginTop: 30}}
                  onPress={this.props.navigation.openDrawer}>
                  <Ionicons
                     name="md-menu"
                     color="#f03a5f"
                     size={32}/>
               </TouchableOpacity>
                  {
                     this.props.name === 'Events'? <EventScreen/>:
                     this.props.name === 'Profile'? <ProfileScreen/>:
                     this.props.name === 'Participations'? <ParticipationScreen/>: null
                  }
            </SafeAreaView>
         </View>
      )
   }
}

const styles = {
   container: {
      flex: 1.0,
      backgroundColor: 'white'
   },
   text: {
      color: "#161924",
      fontSize: 20,
      fontWeight: "500"
   }
}