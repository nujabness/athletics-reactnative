import React, { Component } from 'react';
import {Button, Card, Paragraph, Title} from "react-native-paper";
import { Text, StyleSheet } from "react-native";

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
               <Title>Card title</Title>
               <Paragraph>Card content</Paragraph>
               <Text>{this.state.user.prenom_epreuve} {this.state.user.nom_epreuve}</Text>
               <Text>{this.props.data.epreuve.nom_epreuve} {this.props.data.epreuve.phase_epreuve}</Text>
               <Text>{this.props.data.epreuve.date_epreuve}</Text>
               <Text>{this.state.medaille} {this.state.resultat}</Text>
            </Card.Content>
            <Card.Actions>
               <Button
                  onPress={this.participer}
                  style={styles.button}
                  color="#ffffff"
               >Supprimer</Button>
            </Card.Actions>
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