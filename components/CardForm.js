import React, { Component } from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { Button, Text } from 'native-base';
import { reduxForm, Field, reset } from 'redux-form';
import { connect } from 'react-redux';
import Radio from './Radio';
import Input from './Input';
import { addCard } from '../actions/decks';
import { weldonBlue } from '../utils/colors';

class CardForm extends Component {
	state = {
		radioValue: true
	};

	submit = value => {
		const {dispatch, navigation} = this.props;
		dispatch(addCard(navigation.state.params.deckTitle, {
				...value,
				correct: this.state.radioValue
			})
		);
		navigation.goBack()
	};

	onRadioEvent = event => {
		this.setState({
			radioValue: event
		})
	};

	render() {
		const {handleSubmit} = this.props;
		return (
			<ScrollView style={styles.container}>
				<Text style={styles.label}>Question</Text>
				<Field name="question" component={Input}/>
				<Text style={styles.label}>Answer</Text>
				<Field name="answer" component={Input}/>
				<Text style={styles.label}>Is it correct?</Text>
				<Field
					name="correct"
					type="radio"
					onRadioEvent={this.onRadioEvent}
					component={Radio}
				/>
				<Button
					style={styles.btn}
					onPress={handleSubmit(this.submit)}>
					<Text>Submit</Text>
				</Button>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	label: {
		marginTop: 30,
		marginBottom: 5,
		fontSize: 16
	},
	btn: {
		marginTop: 50,
		alignSelf: 'center',
		backgroundColor: weldonBlue
	}
});

CardForm = connect()(CardForm);

export default reduxForm({
	form: 'add-card',
	onSubmitSuccess: (result, dispatch) => {
		dispatch(reset('add-card'));
		dispatch(reset('add-card'));
		dispatch(reset('add-card'));
	}
})(CardForm);