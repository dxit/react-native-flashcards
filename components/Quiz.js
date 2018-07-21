import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Body, Title, Content, Text } from 'native-base';
import QuizRound from './QuizRound';
import { resetScore } from '../actions/quiz';

class Quiz extends Component {
	componentDidMount() {
		this.props.boundResetScore();
	}

	render() {
		const {deck} = this.props;

		return (
			<Container>
				<Header>
					<Title>Quiz</Title>
				</Header>
				{deck
					? <QuizRound deck={deck} navigate={this.props.navigation.navigate}/>
					: <Content style={{marginTop: 20}}>
						<Body>
						<Text>No Active Quiz</Text>
						</Body>
					</Content>
				}
			</Container>
		)
	}
}

const mapStateToProps = (state, myProps) => {
	const setDeckFromNavigation = navState => navState.params ? navState.params.deck : null;

	return {
		deck: setDeckFromNavigation(myProps.navigation.state)
	}
};

const mapDispatchToProps = (dispatch) => ({
	boundResetScore: () => dispatch(resetScore())
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);