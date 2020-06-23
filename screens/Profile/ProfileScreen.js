import React, { Component } from 'react';
import { Button, Text,  View } from 'react-native';
import DataService from "../../services/http.service";
import {Card, Paragraph, Title} from "react-native-paper";
import {connect} from "react-redux";
import COLORS from "../../utils/colors";

console.disableYellowBox = true;

class ProfileScreen extends Component {

  componentDidMount() {
      let headers = {
          headers: {
              Authorization: 'Bearer ' + this.props.user.token
          }
      }
      DataService.detailsUser({id: this.props.user.id}, headers).then(response => {
          this.setState({user: response.user});
      }).catch(e => {
          console.log(e);
      });
  }

    render(){
      return (
         <View style={styles.container}>
             <View style={styles.contentBox}>
                 <Card style={styles.loginFormBox}>
                     <Card.Content>
                         <Title>Athlète Card</Title>
                         <Text style={{color: "#ff3860", fontWeight: "bold"}}>{this.props.user.nom_athlete}</Text>
                         <Text style={{color: "#ff3860", fontWeight: "bold"}}>{this.props.user.prenom_athlete}</Text>
                         <Paragraph>
                             Athlète <Text style={{color: "#ff3860", fontWeight: "bold"}}>{this.props.user.sexe_athlete}</Text>,
                             Je mesure 1,75m. Mon domaine de prédilection est la COURSE. Je pèse 75kg.
                             Je suis d'origine <Text style={{color: "#ff3860", fontWeight: "bold"}}>{this.props.user.nationalite_athlete.nom_nationalite}</Text>.
                         </Paragraph>
                         <Text style={{color: "#ff3860"}}>#athletics #nopainnogain</Text>
                         <Text>11:09 PM - 1 Jan 2020</Text>
                     </Card.Content>
                     <Card.Actions>
                         <Button
                             title="Edit Profile"
                             onPress={() => this.props.navigation.navigate('EditProfile')}
                             color="#ff3860"/>

                     </Card.Actions>
                 </Card>
             </View>
         </View>
      );
  }
}

const styles = {
  container: {
    flex: 1.0,
    justifyContent: "center",
    backgroundColor: COLORS.red,
  },
    contentBox: {
        marginHorizontal: 50,
    },
    loginFormBox: {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        paddingVertical: 30,
        paddingHorizontal: 15,
        marginBottom: 30,
        elevation: 25,
    },
}

const mapStateToProps = state => ({
    user: state.app.user,
});

export default connect(
    mapStateToProps
)(ProfileScreen);