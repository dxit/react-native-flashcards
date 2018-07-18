import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Button, Text, Spinner, Icon, H1 } from 'native-base'
import { connect } from 'react-redux'
import { stormcloud } from '../utils/colors';

class Deck extends Component {
	static navigationOptions = ({navigation}) => {
		const {deck} = navigation.state.params;
		return {
			title: `Deck: ${deck.title}`
		}
	};

	render() {
		const {deck, navigation} = this.props;

		if (!deck) return <Spinner color={stormcloud}/>;
		else {
			return (
				<Container style={styles.container}>
					<H1>
						{`${deck.questions.length} cards`}
					</H1>
					<View style={styles.btnContainer}>
						<Button
							iconLeft
							style={[styles.btn, {marginLeft: 3}]}
							bordered
							primary
							onPress={() => navigation.navigate(
								'AddCard',
								{deckTitle: deck.title}
							)}>
							<Icon name='ios-add-outline' style={{color: stormcloud}}/>
							<Text style={{color: stormcloud}}>Add Card</Text>
						</Button>
						<Button
							iconLeft
							style={[styles.btnSolid, {marginTop: 10}]}
							primary
							onPress={() => navigation.navigate(
								'Quiz',
								{deck}
							)}>
							<Icon name='ios-qr-scanner'/>
							<Text>Start Quiz</Text>
						</Button>
					</View>
				</Container>
			)
		}
	}
}

const mapStatetoProps = (state, myProps) => {
	return {
		deck: state.decks[myProps.navigation.state.params.deck.title]
	}
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 150,
		alignItems: 'center',
	},
	btnContainer: {
		marginTop: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		borderColor: stormcloud
	},
	btnSolid: {
		backgroundColor: stormcloud
	}
});

export default connect(mapStatetoProps)(Deck);