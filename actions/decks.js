import { SET_INITIAL_DATA, ADD_CARD } from './types';
import { createCard } from '../utils/api';

export function setInitialData(data) {
	return {
		type: SET_INITIAL_DATA,
		data
	}
}

export function onCardDeckSuccess(deckTitle, card) {
	return {
		type: ADD_CARD,
		card,
		title: deckTitle
	}
}

export function addCard (deckTitle, card) {
	return (dispatch) => {
		return createCard(deckTitle, card)
			.then(res => dispatch(onCardDeckSuccess(deckTitle, res)))
			.catch(err => {
				throw(err)
			});
	}
}