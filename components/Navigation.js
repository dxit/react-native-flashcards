import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { stormcloud, white } from '../utils/colors';
import MainList from './MainList';
import Quiz from './Quiz';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import Deck from './Deck';

const Tabs = createBottomTabNavigator({
	Decks: {
		screen: MainList,
		navigationOptions: {
			tabBarLabel: 'Decks',
			tabBarIcon: () =>
				<Ionicons name='ios-list' size={30} color={stormcloud}/>
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: 'Add Deck',
			tabBarIcon: () =>
				<Ionicons name='ios-add' size={30} color={stormcloud}/>
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
	},
	Deck: {
		screen: Deck,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: stormcloud,
			}
		}
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: stormcloud,
			}
		}
	},
	AddCard: {
		screen: AddCard,
		navigationOptions: {
			headerTintColor: white,
			headerStyle: {
				backgroundColor: stormcloud,
			}
		}
	},
});

export default Navigation;