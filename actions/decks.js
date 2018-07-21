import { SET_INITIAL_DATA, ADD_CARD, ADD_DECK } from './types';
import { createCard, createDeck } from '../utils/api';

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

export function addCard(deckTitle, card) {
	return (dispatch) => {
		return createCard(deckTitle, card)
			.then(res => dispatch(onCardDeckSuccess(deckTitle, res)))
			.catch(err => {
				throw(err)
			});
	}
}

function onAddDeckSuccess (deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function addDeck(title) {
	return (dispatch) => {
		return createDeck(title)
			.then(res => dispatch(onAddDeckSuccess(res)))
			.catch(err => {
				throw(err)
			})
	}
}