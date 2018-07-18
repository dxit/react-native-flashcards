import React from 'react';
import { ListItem, Left, Right, Badge, Text, Icon } from 'native-base'
import { StyleSheet } from 'react-native';

const DeckListItem = ({deck, ...props}) => {
	return (
		<ListItem button onPress={() => props.navigation.navigate('Deck', {deck})}>
			<Left>
				<Text>{deck.title}</Text>
			</Left>
			<Right style={styles.right}>
				<Badge primary><Text>{deck.questions.length}</Text></Badge>
				<Icon name="arrow-forward"/>
			</Right>
		</ListItem>
	);
};

const styles = StyleSheet.create({
	right: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
});

export default DeckListItem;