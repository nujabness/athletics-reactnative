import React, { Component } from 'react';
import {Button, Card, Paragraph, Title} from "react-native-paper";
import {Text} from "react-native";
import DataService from "../services/http.service";

export default class  EventCard extends Component {
   constructor(props){
      super(props);
      this.state = {
         // message: '',
         // user:{
         //    role: {}
         // },
         participeDeja: false,
         // admin: false
      }
   }


   participer() {
      let body = {
         user: this.state.user,
         epreuve: this.props.data
      }
      DataService.participeEvents(body).then(response => {
         this.setState({participeDeja: true});
         console.log(response.data);
      }).catch(e => {
         console.log(e);
      });
   }

   async annulerParticipation() {
      let body = {
         // id: this.state.user._id,
         // epreuve: this.props.data
      }
      DataService.annulerParticipation(body).then(response => {
         this.setState({participeDeja: false});
         console.log(response.data);
      }).catch(e => {
         console.log(e);
      });

   }

   render() {
      return (
         <Card>
            <Card.Content>
               <Title>Card title</Title>
               <Paragraph>Card content</Paragraph>
               <Text>{this.props.data.nom_epreuve}</Text>
            </Card.Content>
            <Card.Actions>
               {
                  this.state.participeDeja ?
                     <Button
                        onPress={this.participer}
                        style={styles.button}
                        color="#ffffff"
                     >Annuler</Button> :
                     <Button
                        onPress={this.annulerParticipation}
                        style={styles.button}
                        color="#ffffff"
                     >Je participe</Button>
               }
            </Card.Actions>
         </Card>
      )
   }
}

const styles = {
   button: {
      borderWidth: 2,
      cursor: 'pointer',
      justifyContent: 'center',
      backgroundColor: '#f03a5f',
      borderColor: '#cc0f35',
   },
}
