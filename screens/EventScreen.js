import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import DataService from "../services/http.service";
import EventCard from "../components/EventCard";
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
       <ScrollView style={styles.card}>
         {
           events.map((item, index) => {
             return(
                <EventCard style={styles.card} key={index} data={item} />
             )
           })
         }
       </ScrollView>
    );
  }
}

const styles = {
  card: {
    marginLeft: 20
  },

  button: {
    borderWidth: 2,
    cursor: 'pointer',
    justifyContent: 'center',
    backgroundColor: '#f03a5f',
    borderColor: '#cc0f35',
  },

  mainContainer: {
    flex: 1.0,
    backgroundColor: 'white',
  },
  safeAreaStyle: {
    flex: 1.0,
    flexDirection: 'column',
    backgroundColor: '#ff3860',
  },
  headerContainer: {
    flex: 1.0,
    flexDirection: 'column',
    justifyContect: 'center',
    backgroundColor: 'white',
  },
  headerTitle: {
    flex: 1.0,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'flex-start',
    tintColor: 'white'
  },
  menuContainer: {
    flex: 1.0,
    backgroundColor: '#ff3860',
  },
  menuTitleContainer: {
    alignItem:'center',
    height: 60,
    width:'100%',
    flexDirection:'row',
  },
  menuTitle: {
    width:'100%',
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    alignSelf:'center',
  }
}