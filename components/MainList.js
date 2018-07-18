import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { Container, Header, Title, Content, List } from 'native-base';
import { connect } from 'react-redux';

import DeckListItem from './DeckListItem';

const MainList = (props) => {
	return (
		<Container>
			<Header>
				<Title>All Decks</Title>
			</Header>
			<Content>
				<List>
					{props.decks.map(deck =>
						<DeckListItem key={deck.title} navigation={props.navigation} deck={deck} />
					)}
				</List>
			</Content>
		</Container>
	)
};

const mapStateToProps = ({decks}) => {
	const convertDecksToArray = decks => decks ? Object.values(decks).map( deck => deck ) : [];

	return {
		decks: convertDecksToArray(decks)
	}
};

export default connect(mapStateToProps)(MainList);