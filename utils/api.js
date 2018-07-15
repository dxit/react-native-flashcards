import { AsyncStorage } from 'react-native';
import mainDB from './_DATA';

const STORAGE_KEY = 'decks';

const setInitialData = () => {
	AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(mainDB));
	return mainDB;
};

export const fetchInitialData = () => AsyncStorage.getItem(STORAGE_KEY).then(setInitialData);