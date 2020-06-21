import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import {Button, Text, View, StyleSheet} from "react-native";
import { Item, DatePicker } from "native-base"
import TextInput from "../../fields/TextInput/TextInput";
import { required } from "../../utils/formHelpers";
import PickerInput from "../../fields/PickerInput/PickerInput";
import STYLES from "../../utils/styles";
import moment from "moment";

class EditEventForm extends Component {
  render() {
    return (
        <View>
            <View style={STYLES.formWrapper}>
                <Field
                    name="nom_epreuve"
                    label="Nom Epreuve"
                    textContentType="TextInput"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    name="type_epreuve"
                    label="Type Epreuve"
                    component={PickerInput}>
                    <Item label="LANCER" value="LANCER"/>
                    <Item label="COURSE" value="COURSE"/>
                    <Item label="SAUT" value="SAUT"/>
                    <Item label="DECATHLON" value="DECATHLON"/>
                </Field>
                <Field
                    name="phase_epreuve"
                    label="Phase Epreuve"
                    component={PickerInput}>
                    <Item label="FINAL" value="FINAL"/>
                    <Item label="DEMI-FINAL"value="DEMI-FINAL"/>
                    <Item label="QUART-FINAL" value="QUART-FINAL"/>
                    <Item label="8ème FINAL" value="8ème FINAL"/>
                    <Item label="POUL" value="POUL"/>
                </Field>
                <Field
                    name="date_epreuve"
                    component={ props =>
                       <DatePicker
                           date={props.input.value}
                           onDateChange={(date) => props.input.onChange(moment(new Date(date)).format("MM/DD/YYYY"))}/>
                    }
                />
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
    form: "editEventForm",
})(EditEventForm);