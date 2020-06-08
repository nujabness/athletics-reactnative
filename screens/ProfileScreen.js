import React, { Component } from 'react';
import { Text,  View, SafeAreaView } from 'react-native';

console.disableYellowBox = true;

export default class  ProfileScreen extends Component {

  render(){
      return (
         <View>
           <Text>PROFILE</Text>
         </View>
      );
  }
}


const styles = {
  mainContainer: {
    flex: 1.0,
    backgroundColor: 'white',
  },
  safeAreaStyle: {
    flex: 1.0,
    flexDirection: 'column',
    backgroundColor: '#ff3860',
  },
}