import React, { Component } from 'react';
import {Card, Paragraph, Title} from "react-native-paper";
import {Text, Button, View} from "react-native";
import DataService from "../../services/http.service";

export default class EventCard extends Component {
   constructor(props){
      super(props);
      this.state = {
         participeDeja: false,
      }
   }

   participer() {
      let headers = {
         headers: {
            Authorization: 'Bearer ' + this.props.user.token
         }
      }
      let body = {
         user: this.props.user,
         epreuve: this.props.data
      }
      DataService.participeEvents(body, headers).then(response => {
         this.setState({participeDeja: true});
      }).catch(e => {
         console.log(e);
      });
   }

   supprimer(){
      let headers = {
         headers: {
            Authorization: 'Bearer ' + this.props.user.token
         }
      }
      let body = {
         id: this.props.data._id,
      }
      DataService.supprimerEvents(body, headers).then(response => {
         this.props.allEvent()
      }).catch(e => {
         console.log(e);
      });
   }


   annulerParticipation() {
      let headers = {
         headers: {
            Authorization: 'Bearer ' + this.props.user.token
         }
      }
      let body = {
         id: this.props.user._id,
         epreuve: this.props.data
      }
      DataService.annulerParticipation(body, headers).then(response => {
         this.setState({participeDeja: false});
      }).catch(e => {
         console.log(e);
      });
   }

   render() {
      return (
         <Card>
            <Card.Content>
               <Title>{this.props.data.nom_epreuve} {this.props.data.type_epreuve}</Title>
               <Paragraph>
                  <Text>{this.props.data.phase_epreuve}</Text>
               </Paragraph>
            </Card.Content>
            <Card.Actions>
               {
                  this.state.participeDeja ?
                     <Button
                        title="Annuler"
                        onPress={() => this.annulerParticipation()}
                        style={styles.button}/>:
                     <Button
                        title="Participer"
                        onPress={() => this.participer()}
                        style={styles.button}/>
               }
               {
                  this.props.user.role.role == 'ADMIN'?
                      <View style={styles.buttonAdmin}>
                         <View style={styles.margin}>
                            <Button
                                title="Edit"
                                onPress={() => this.props.navigation.navigate('EditEvent', {
                                    epreuve: this.props.data
                                })}
                                style={styles.button}/>
                         </View>
                      <View style={styles.margin}>
                         <Button
                             title="Supprimer"
                             onPress={() => this.supprimer()}
                             style={styles.button}/>
                      </View>
                      </View>: null
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
   buttonAdmin:{
     flexDirection: 'row',
   },
   margin:{
      marginLeft: 20,
   }
}

