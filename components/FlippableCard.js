import React, { Component } from 'react';
import { View, Animated, TouchableHighlight } from 'react-native';
import { Text, Body } from 'native-base';

import { getFlipTransformation } from '../utils/helpers';
import { stormcloud, white } from '../utils/colors';

class FlippableCard extends Component {

	state = {
		frontFacing: true,
		flipValue: new Animated.Value(0),
		...this.props
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.question !== prevState.question && !prevState.frontFacing) {
			this.setState({
				frontFacing: true,
				flipValue: new Animated.Value(0)
			})
		}
	}

	flipCard = () => {
		const {frontFacing, flipValue} = this.state;

		frontFacing
			? Animated.spring(flipValue, {
				toValue: 180,
				friction: 8,
				tension: 10,
			}).start()
			: Animated.spring(flipValue, {
				toValue: 0,
				friction: 8,
				tension: 10,
			}).start();

		this.setState({
			frontFacing: !this.state.frontFacing
		})
	};

	render() {
		const {question, answer} = this.props;
		const {frontFacing, flipValue} = this.state;

		const toggleFlip = getFlipTransformation(frontFacing, flipValue);

		if (frontFacing) {
			return (
				<Animated.View style={[styles.container, toggleFlip]}>
					<TouchableHighlight
						style={styles.card}
						onPress={this.flipCard}
					>
						<Body style={[styles.body, styles.frontBg]}>
						<Text style={styles.frontText}>
							{question}
						</Text>
						<Text style={styles.footerText}>
							Tap to see answer
						</Text>
						</Body>
					</TouchableHighlight>
				</Animated.View>
			)
		} else {
			return (
				<Animated.View style={[styles.container, toggleFlip]}>
					<TouchableHighlight
						style={styles.card}
						onPress={this.flipCard}
					>
						<Body style={[styles.body, styles.backBg]}>
						<Text style={styles.backText}>
							{answer}
						</Text>
						</Body>
					</TouchableHighlight>
				</Animated.View>
			)
		}
	}
}

const styles = {
	container: {
		flex: 1
	},
	card: {
		flex: 1,
		marginTop: 80,
	},
	body: {
		flex: 1,
		height: 250,
		width: 350,
		borderRadius: 10,
		shadowColor: 'rgba(0, 0, 0, 0.24)',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowRadius: 6,
		shadowOpacity: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	frontBg: {
		backgroundColor: white,
	},
	frontText: {
		fontSize: 18,
		padding: 10,
	},
	backBg: {
		backgroundColor: stormcloud,
	},
	backText: {
		fontSize: 18,
		padding: 10,
		color: 'white'
	},
	footerText: {
		fontSize: 16,
		position: 'absolute',
		bottom: 5,
		color: 'grey'
	}
};

export default FlippableCard;