import React, { Component } from 'react';
import { Text,  View } from 'react-native';
import DataService from "../../services/http.service";
import {Button, Card, Paragraph, Title} from "react-native-paper";

console.disableYellowBox = true;

export default class  ProfileScreen extends Component {

  componentDidMount() {
      DataService.detailsUser({id: ''}).then(response => {
          this.setState({user: response.user});
      }).catch(e => {
          console.log(e);
      });
  }

    render(){
      return (
         <View>
             <Card>
                 <Card.Content>
                     <Title>Card title</Title>
                     <Paragraph>Card content</Paragraph>
                     <Text>#athletics</Text>
                        <Text>#nopainnogain</Text>
                     <Text>11:09 PM - 1 Jan 2016</Text>
                 </Card.Content>
                 <Card.Actions>
                     <Button
                         onPress={() => this.props.navigation.navigate('EditProfile')}
                         style={styles.button}
                         color="#FF0000">
                        Edit Profile</Button>
                 </Card.Actions>
             </Card>
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