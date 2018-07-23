import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Text, Form, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux';
import { addDeck } from '../actions/decks';
import { weldonBlue } from '../utils/colors';

class DeckForm extends Component {
	state = {
		title: ''
	};

	submit = () => {
		const {navigation, dispatch} = this.props;
		const {title} = this.state;

		dispatch(addDeck(title));
		navigation.navigate('Deck', {deck: {title}});
	};

	render() {
		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
				<Form>
					<Item floatingLabel>
						<Label>Deck Title</Label>
						<Input onChangeText={title => this.setState({title})}/>
					</Item>
					<Button
						style={styles.btn}
						onPress={this.submit}>
						<Text>Submit</Text>
					</Button>
				</Form>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	btn: {
		marginTop: 50,
		alignSelf: 'center',
		backgroundColor: weldonBlue
	}
});

export default connect()(DeckForm);