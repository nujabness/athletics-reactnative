import React, { Component } from 'react';
import {Card, Paragraph, Title} from "react-native-paper";
import { Button, Text, StyleSheet } from "react-native";

export default class  Participation extends Component {
   constructor(props){
      super(props);
      this.state = {
         user: {
            nom_athlete: 'ness',
            prenom_athlete: 'ness',
            nationalite_athlete: {}
         },         medaille: 'PAS DE MEDAILLE',
         resultat: 'ABS'
      }
   }

   render() {
      return(
         <Card>
            <Card.Content>
               <Title>{this.props.user.prenom_athlete} {this.props.user.nom_athlete}</Title>
               <Paragraph>
                  <Text>{this.props.data.epreuve.nom_epreuve} {this.props.data.epreuve.phase_epreuve} </Text>
                  <Text>{this.props.data.epreuve.type_epreuve} </Text>
                  <Text>{this.state.medaille} {this.state.resultat} </Text>
               </Paragraph>
            </Card.Content>
         </Card>
      )
   }
}

const styles = StyleSheet.create({
   button: {
      borderWidth: 2,
         justifyContent: 'center',
      backgroundColor: '#f03a5f',
      borderColor: '#cc0f35',
   },
})