import React, { Component } from 'react';
import {Card, Paragraph, Title} from "react-native-paper";
import {Text, Button, View} from "react-native";
import {connect} from "react-redux";
import DataService from "../../services/http.service";

class UserCard extends Component {

    supprimer(){
        let headers = {
            headers: {
                Authorization: 'Bearer ' + this.props.user.token
            }
        }
        let body = {
            id: this.props.data._id,
        }
        DataService.supprimerUsers(body, headers).then(response => {
            this.props.allUsers()
        }).catch(e => {
            console.log(e);
        });
    }

   render() {
      return (
         <Card>
            <Card.Content>
               <Title>User Card</Title>
               <Paragraph>
                  <Text>{this.props.data.prenom_athlete}</Text>
                  <Text>{this.props.data.nom_athlete}</Text>
               </Paragraph>

            </Card.Content>
            <Card.Actions>
               <View>
                  <Button
                      title="Update"
                      style={styles.button}/>
               </View>
              <View style={styles.margin}>
                 <Button
                     onPress={() => this.supprimer()}
                     title="Delete"
                     style={styles.button}/>
              </View>
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
    margin:{
        marginLeft: 20,
    }
}

const mapStateToProps = state => ({
   user: state.app.user,
});

export default connect(
    mapStateToProps
)(UserCard);

