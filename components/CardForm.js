import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Text, Item, Form, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import Radio from './Radio';
import { addCard } from '../actions/decks';
import { weldonBlue } from '../utils/colors';

class CardForm extends Component {
	state = {
		question: '',
		answer: '',
		radioValue: true
	};

	submit = () => {
		const {dispatch, navigation} = this.props;
		const {question, answer} = this.state;

		dispatch(addCard(navigation.state.params.deckTitle, {
				question,
				answer,
				correct: this.state.radioValue
			})
		);

		navigation.goBack();
	};

	onRadioEvent = event => {
		this.setState({
			radioValue: event
		})
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<Form>
					<Item floatingLabel>
						<Label>Question</Label>
						<Input onChangeText={question => this.setState({question})}/>
					</Item>
					<Item floatingLabel>
						<Label>Answer</Label>
						<Input onChangeText={answer => this.setState({answer})}/>
					</Item>
					<Text style={styles.label}>Is it correct?</Text>
					<Radio onRadioEvent={this.onRadioEvent}/>
					<Button
						style={styles.btn}
						onPress={this.submit}>
						<Text>Submit</Text>
					</Button>
				</Form>
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
		fontSize: 16,
		textAlign: 'center'
	},
	btn: {
		marginTop: 50,
		alignSelf: 'center',
		backgroundColor: weldonBlue
	}
});

export default connect()(CardForm);