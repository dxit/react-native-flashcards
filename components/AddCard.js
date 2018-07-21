import React from 'react';
import { Container, Header, Content, Body, Title } from 'native-base';
import { withNavigation } from 'react-navigation'
import CardForm from './CardForm';

const AddCard = ({navigation}) => {
	return (
		<Container>
			<Header>
				<Title>Add Card</Title>
			</Header>
			<Content>
				<CardForm navigation={navigation}/>
			</Content>
		</Container>
	)
};

export default withNavigation(AddCard);