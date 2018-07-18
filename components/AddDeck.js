import React  from 'react';
import { Container, Header, Content, Body, Title } from 'native-base'
import { withNavigation } from 'react-navigation';

const AddDeck = ({navigation}) => {
	return(
		<Container>
			<Header>
				<Title>Add Deck</Title>
			</Header>
			<Content>
				<Body>
					<CardForm navigation={navigation} />
				</Body>
			</Content>
		</Container>
	)
};

export default AddDeck;