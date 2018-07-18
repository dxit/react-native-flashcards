import { SET_INITIAL_DATA, ADD_CARD } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SET_INITIAL_DATA:
			return {
				...state,
				...action.data
			};
		case ADD_CARD:
			const {title, card} = action;
			return {
				...state,
				[title]: {
					...state[title],
					questions: [
						...state[title].questions,
						card
					]
				}
			};
		default:
			return state
	}
}