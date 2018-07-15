import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { columbiaBlue, stormcloud, white } from '../utils/colors';
import ListDecks from './ListDecks';
import Quiz from './Quiz';
import AddDeck from './AddDeck';

const Tabs = createBottomTabNavigator({
	Decks: {
		screen: ListDecks,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: () =>
				<Ionicons name='ios-list' size={30} color={stormcloud} />
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			tabBarLabel: 'Quiz',
			tabBarIcon: () =>
				<EvilIcons name='trophy' size={30} color={stormcloud} />
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: 'Add Deck',
			tabBarIcon: () =>
				<Ionicons name='ios-add' size={30} color={stormcloud} />
		}
	}
}, {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: stormcloud,
		inactiveTintColor: stormcloud,
		style: {
			height: Platform.OS === 'ios' ? 50 : 75,
			paddingTop: Platform.OS === 'ios' ? 5 : 20,
			paddingBottom: Platform.OS === 'ios' ? 5 : 20,
			backgroundColor: white,
			shadowColor: 'rgba(0, 0, 0, 0.2)'
		}
	}
});

const Navigation = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			header: null
		}
	}
});

export default Navigation;