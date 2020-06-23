import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import {Button, Text, View} from "react-native";
import TextInput from "../../fields/TextInput/TextInput";
import { required } from "../../utils/formHelpers";
import STYLES from "../../utils/styles";

class LoginForm extends Component {
  render() {
    return (
        <View>
            <View style={STYLES.formWrapper}>
                <Text>Login</Text>
                <Field
                    name="email"
                    label="e-mail"
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="person"
                    validate={[required]}/>
                <Field
                    name="password"
                    label="Password"
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    component={TextInput}
                    icon="key"
                    validate={[required]}/>
            </View>
             <View>
                <Button
                    title="Login"
                    onPress={this.props.handleSubmit}/>
            </View>
        </View>
    );
  }
}

export default reduxForm({
    form: "login",
})(LoginForm);