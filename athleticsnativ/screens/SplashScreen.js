import React, { Component } from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';

console.disableYellowBox = true;

export default class  SplashScreen extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
           this.props.navigation.navigate('Login');
           // this.props.navigation.navigate('Athletics');
        }, 5000);
    }


    render(){
      return (
         <View style={styles.container}>
             <ImageBackground
                 source={require('../assets/splash.png')}
                 style={{height: '100%', width: '100%'}}/>

         </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
})