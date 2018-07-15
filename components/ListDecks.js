import React, { Component } from 'react';
import { Container, Header, Title, Content } from 'native-base'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

class ListDecks extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Title>All Decks</Title>
				</Header>
				<Content>
					<Text>Test</Text>
				</Content>
			</Container>
		)
	}
};

export default ListDecks;