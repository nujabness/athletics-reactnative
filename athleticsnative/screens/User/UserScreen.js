import React, { Component } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DataService from "../../services/http.service";
import {connect} from "react-redux";
import UserCard from "../../components/User/UserCard";
import COLORS from "../../utils/colors";
console.disableYellowBox = true;

class UserScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  allUsers(){
    let headers = {
      headers: {
        Authorization: 'Bearer ' + this.props.user.token
      }
    }
    DataService.getAllUsers(headers).then(response => {
      this.setState({
        users: response.data.users
      });
    }).catch(e => {
      console.log(e);
    });
  }

  componentDidMount() {
    this.allUsers()
  }

  render(){
    const users = this.state.users;
    return (
       <ScrollView style={styles.container}>
         <Text style={styles.title}>All Users</Text>
         {
           users.map((item, index) => {
             return(
                 <View style={styles.card} contentContainerStyle={styles.contentContainerStyle}>
                    <UserCard key={index} data={item} allUsers={() => this.allUsers()}/>
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
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 30
  },
  container: {
    flex: 1.0,
    paddingTop: 60,
    backgroundColor: COLORS.red,
  },
})

const mapStateToProps = state => ({
  user: state.app.user,
});

export default connect(
    mapStateToProps
)(UserScreen);