import React  from 'react';
import { Container, Header, Content, Title } from 'native-base'
import { withNavigation } from 'react-navigation';
import DeckForm from './DeckForm';

const AddDeck = ({navigation}) => {
	return(
		<Container>
			<Header>
				<Title>Add Deck</Title>
			</Header>
			<Content>
				<DeckForm navigation={navigation} />
			</Content>
		</Container>
	)
};

export default withNavigation(AddDeck);