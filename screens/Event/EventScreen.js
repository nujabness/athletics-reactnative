import React, { Component } from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import DataService from "../../services/http.service";
import EventCard from "../../components/EventCard";
console.disableYellowBox = true;

export default class EventScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    DataService.getAllEvents().then(response => {
      this.setState({
        events: response.data.epreuves
      });
      console.log(response.data);
    }).catch(e => {
      console.log(e);
    });
  }

  render(){
    const events = this.state.events;
    return (
       <ScrollView style={styles.container}>
         {
           events.map((item, index) => {
             return(
                 <View style={styles.card} contentContainerStyle={styles.contentContainerStyle}>
                    <EventCard key={index} data={item} />
                 </View>
             )
           })
         }
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },

  container: {
    flex: 1.0,
  },
})