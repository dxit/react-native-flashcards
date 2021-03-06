import { AsyncStorage } from 'react-native';
import mainDB from './_DATA';

const STORAGE_KEY = 'decks';

const setInitialData = () => {
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mainDB));
	return mainDB;
};

export const fetchInitialData = () => AsyncStorage.getItem(STORAGE_KEY).then(setInitialData);

export const createCard = async (deckTitle, card) => {
	const DB = await AsyncStorage.getItem(STORAGE_KEY);
	const parsedDB = JSON.parse(DB);
	const updatedDB = {
		...parsedDB,
		[deckTitle]: {
			...parsedDB[deckTitle],
			questions: [
				...parsedDB[deckTitle].questions,
				card
			]
		}
	};

	AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(updatedDB));

	const peakDB = await AsyncStorage.getItem(STORAGE_KEY);
	const parsedPeakDB = JSON.parse(peakDB);
	const theCard = parsedPeakDB[deckTitle].questions.filter(item =>
		item.question === card.question
	);

	return {
		...theCard[0]
	}
};

export const createDeck = async (title) => {
	const oldDB = await AsyncStorage.getItem(STORAGE_KEY);
	const parsedOldDB = JSON.parse(oldDB);

	const newDeck = {
		...parsedOldDB,
		[title]: {
			title: title,
			createdAt: Date.now(),
			questions: []
		}
	};

	AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck));

	const createdDeck = await AsyncStorage.getItem(STORAGE_KEY);
	const parsedCreatedDeck = JSON.parse(createdDeck);
	return parsedCreatedDeck[title];
};