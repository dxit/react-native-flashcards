import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, Header, Body, Content, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';
import { addPoint } from '../actions/quiz';
import FlippableCard from './FlippableCard';
import { stormcloud, sunsetOrange, white } from '../utils/colors';
import { clearLocalNotification, setStudyReminderNotification } from '../utils/notifications';

class QuizRound extends Component {
	state = {
		step: 1,
		maxStep: this.props.deck.questions.length,
		showScoreScreen: false
	};

	nextQuestion = ansIsTrue => {
		const {step, maxStep} = this.state;

		if (ansIsTrue) {
			this.props.boundAddPoint()
		}

		if (step < maxStep) {
			this.setState({
				step: step + 1
			})
		} else {
			this.setState({showScoreScreen: true});

			clearLocalNotification()
				.then(setStudyReminderNotification())
		}
	};

	render() {
		const {step, maxStep, showScoreScreen} = this.state;
		const {score} = this.props;
		const {question, answer, correct} = this.props.deck.questions[step - 1];

		const getScore = score => Math.round(score / maxStep * 100);

		if (showScoreScreen) {
			return (
				<Container>
					<Header>
						<Text style={styles.scoreHeaderTxt}>
							{`You Finished! 🚀`}
						</Text>
					</Header>
					<Content>
						<Body style={styles.scoreBody}>
						<Text style={styles.scoreBodyTxt}>
							{`Your score is: `}
						</Text>
						<Text style={styles.scoreBodyTxtScore}>
							{`${getScore(score)} %`}
						</Text>
						</Body>
						<Button
							style={styles.backBtn}
							onPress={() => this.props.navigate('Decks')}
						>
							<Text style={styles.backBtnTxt}>Go Home </Text>
						</Button>
					</Content>
				</Container>
			)
		}

		return (
			<Container>
				<Header>
					<Text>{`Question ${step}/${maxStep}`}</Text>
				</Header>
				<Content>
					<Body>
					<FlippableCard
						key={question}
						question={question}
						answer={answer}
					/>
					</Body>
				</Content>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.incorrectBtn}
						onPress={() => this.nextQuestion(correct === false)}
					>
						<Text style={styles.incorrectBtnTxt}>Incorrect</Text>
					</Button>
					<Button
						style={styles.correctBtn}
						onPress={() => this.nextQuestion(correct === true)}
					>
						<Text>Correct</Text>
					</Button>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	scoreHeaderTxt: {
		fontSize: 24
	},
	scoreBody: {
		justifyContent: 'center',
		marginTop: 100
	},
	scoreBodyTxt: {
		fontSize: 24
	},
	scoreBodyTxtScore: {
		fontSize: 60,
		marginTop: 20,
		color: stormcloud
	},
	backBtn: {
		marginTop: 100,
		backgroundColor: stormcloud,
		alignSelf: 'center'
	},
	backBtnTxt: {
		color: 'white'
	},
	buttonContainer: {
		flexDirection: 'row',
		flex: 1,
		position: 'absolute',
		bottom: 50,
		left: 0,
		right: 0,
		justifyContent: 'center',
		padding: 15
	},
	correctBtn: {
		backgroundColor: stormcloud,
		margin: 4
	},
	incorrectBtn: {
		backgroundColor: sunsetOrange,
		margin: 4
	},
	incorrectBtnTxt: {
		color: white
	}
});

const mapStateToProps = (state) => {
	return {
		score: state.quiz.score
	}
};

const mapDispatchToProps = dispatch => ({
	boundAddPoint: () => dispatch(addPoint())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizRound);