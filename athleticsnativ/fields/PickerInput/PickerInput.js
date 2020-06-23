import React, { Component } from "react";
import { StyleSheet, Picker } from "react-native";

const PickerInput = ({ input: { onChange, value, ...inputProps }, children, ...pickerProps }) => (
	<Picker
		selectedValue={ value }
		onValueChange={ value => onChange(value) }
		{ ...inputProps }
		{ ...pickerProps }
	>
		{ children }
	</Picker>
);

export default PickerInput;
