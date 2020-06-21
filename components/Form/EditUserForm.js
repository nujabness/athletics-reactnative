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
                    name="nom_athlete"
                    label="Nom Athlète"
                    textContentType="TextInput"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    name="prenom_athlete"
                    label="Prénom Athlète"
                    textContentType="TextInput"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    name="sexe_athlete"
                    label="Sexe Athlète"
                    component={PickerInput}>
                    <Item label="Homme" value="HOMME" />
                    <Item label="Femme" value="FEMME" />
                </Field>
                <Field
                    name="nationalite_athlete"
                    label="Nationalite Athlète"
                    component={PickerInput}>
                    <Item label="FRNACE" value="FRANCE" />
                    <Item label="ALLEMAGNE" value="ALLEMAGNE" />
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