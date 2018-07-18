import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text, Spinner } from 'native-base'
import { connect } from 'react-redux'
import { stormcloud } from '../utils/colors';

class Deck extends Component {
	static navigationOptions = ({ navigation }) => {
		const { deck } = navigation.state.params;
		return {
			title: `Deck: ${deck.title}`
		}
	};

	render()    {
		const { deck, navigation } = this.props;

		if(!deck) return <Spinner color={stormcloud} />;
		else {
			return (
				<View>
					<Text>Deck</Text>
				</View>
			)
		}
	}
}

const mapStatetoProps = (state, myProps) => {
	return {
		deck: state.decks[myProps.navigation.state.params.deck.title]
	}
};

export default connect(mapStatetoProps)(Deck);