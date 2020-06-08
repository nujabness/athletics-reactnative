import React, { Component } from 'react';
import { View, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'

export default Sidebar => props (
  <ScrollView>
    <ImageBackground
    source={require("../assets/bg.jpg")}
    style={{ width: 'auto', padding: 16, paddingTop: 48}}>
      <Image
      source={require("../assets/profile.svg")}
      style={styles.profile}/>
      <Text style={styles.name}>Mohammed EL ASSOURI</Text>
    </ImageBackground>
    <View style={styles.container}>
      <DrawerNavigatorItems {...props}/>
    </View>
  </ScrollView>
)

const styles = {
  container:{
    flex: 1
  },
  profile:{
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white'
  },
  name:{
    color: 'white',
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8
  }
}

