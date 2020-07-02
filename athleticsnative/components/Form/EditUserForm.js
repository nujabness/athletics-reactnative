import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import {Button, Text, View} from "react-native";
import { Item } from "native-base"
import TextInput from "../../fields/TextInput/TextInput";
import { required } from "../../utils/formHelpers";
import STYLES from "../../utils/styles";
import PickerInput from "../../fields/PickerInput/PickerInput";

class EditUserForm extends Component {

  render() {
    return (
        <View>
            <View style={STYLES.formWrapper}>
                <Text>Edit User</Text>
                <Field
                    defaultValue={this.props.user.nom_athlete}
                    name="nom_athlete"
                    label="Nom Athlète"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    defaultValue={this.props.user.prenom_athlete}
                    name="prenom_athlete"
                    label="Prénom Athlète"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    defaultValue={this.props.user.sexe_athlete}
                    name="sexe_athlete"
                    label="Sexe Athlète"
                    component={PickerInput}>
                    <Item label="Homme" value="HOMME" />
                    <Item label="Femme" value="FEMME" />
                </Field>
                <Field
                    defaultValue={this.props.user.nationalite_athlete.nom_nationalite}
                    name="nationalite_athlete"
                    label="Nationalite Athlète"
                    component={PickerInput}>
                    <Item label="France" value="France" />
                    <Item label="Allemagne" value="Allemagne" />
                </Field>
            </View>
             <View>
                <Button
                    title="Save"
                    onPress={this.props.handleSubmit}/>
            </View>
        </View>
    );
  }
}

export default reduxForm({
    form: "editUserForm",
})(EditUserForm);