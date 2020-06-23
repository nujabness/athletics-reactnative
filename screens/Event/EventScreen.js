import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DataService from "../../services/http.service";
import EventCard from "../../components/Event/EventCard";
import COLORS from "../../utils/colors";
import {connect} from "react-redux";
console.disableYellowBox = true;

class EventScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  allEvents(){
    let headers = {
      headers: {
        Authorization: 'Bearer ' + this.props.user.token
      }
    }
    DataService.getAllEvents(headers).then(response => {
      this.setState({
        events: response.data.epreuves
      });
    }).catch(e => {
      console.log(e);
    });
  }

  componentDidMount() {
    this.allEvents()
  }

  render(){
    const events = this.state.events;
    return (
       <ScrollView style={styles.container}>
         <Text style={styles.title}>All Events</Text>
         {
           events.map((item) => {
             return(
                 <View key={this.props.user.id} style={styles.card} contentContainerStyle={styles.contentContainerStyle}>
                    <EventCard navigation={this.props.navigation} data={item} user={this.props.user} allEvent={() => this.allEvents()}/>
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
  title:{
    marginTop: 60,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 30
  },
  container: {
    flex: 1.0,
    backgroundColor: COLORS.red,
  },
})

const mapStateToProps = state => ({
  user: state.app.user,
});

export default connect(
    mapStateToProps
)(EventScreen);
