import React, { Component } from "react";
import { Item, DatePicker, Label } from "native-base";
import moment from 'moment';

const DatePickerInput = ({input, placeholder, defaultValue }) => (
		<DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
);
export default DatePickerInput;
