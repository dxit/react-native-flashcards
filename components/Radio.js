import React, { Component } from 'react';
import { View } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { weldonBlue } from '../utils/colors';

const radioProps = [
	{label: 'true', value: true},
	{label: 'false', value: false}
];

export default class Radio extends Component {
	state = {
		value: true,
	};

	handleRadioEvent = value => {
		this.setState({value});
		this.props.onRadioEvent(value)
	};

	render() {
		return (
			<View style={{alignItems: 'center'}}>
				<RadioForm
					buttonColor={weldonBlue}
					radio_props={radioProps}
					initial={0}
					formHorizontal={true}
					onPress={value => this.handleRadioEvent(value)}
				/>
			</View>
		)
	}
}