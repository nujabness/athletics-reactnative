import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DataService from "../../services/http.service";
import  Participation  from '../../components/Participation';
import {connect} from "react-redux";
import COLORS from "../../utils/colors";
console.disableYellowBox = true;

class ParticipationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      participations: [],
    }
  }

  componentDidMount() {
    let headers = {
      headers: {
        Authorization: 'Bearer ' + this.props.user.token
      }
    }
    let body = {
      _id: this.props.user._id
    }
    DataService.getParticipations(body, headers).then(response => {
      this.setState({
          participations: response.data.participations,
      });
    }).catch(e => {
      console.log(e);
    });
  }

  render(){
    return (
       <ScrollView style={styles.container}>
         <Text style={styles.title}>All Participations</Text>
         {
           this.state.participations.map((epreuve, index) => {
             return(
                 <View style={styles.card}>
                   <Participation
                       key={index}
                       user={this.props.user} data={epreuve} />
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
)(ParticipationScreen);
