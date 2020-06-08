import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import DataService from "../services/http.service";
import  Participation  from '../components/Participation';
console.disableYellowBox = true;

export default class ParticipationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Athletics Tournament ~ Participations",
      participations: [],
      user: {
        nom_athlete: 'ness',
        prenom_athlete: 'ness',
        nationalite_athlete: {}
      },
      nationalite: ''
    }
  }

  componentDidMount() {
    let body = {
      "_id": "5de0f016d4d3e9d4074cd895"
    }
    DataService.getParticipations(body).then(response => {
      this.setState({
          participations: response.data.participations,
      });
      this.setTableParticipation();
      console.log(response.data);
    }).catch(e => {
      console.log(e);
    });
  }

  render(){
    return (
       <ScrollView style={styles.card}>
         {
           this.state.participations.map((epreuve, index) => {
             return(
                <Participation key={index} data={epreuve}/>
             )
           })
         }
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: { marginLeft: 20 },
});

