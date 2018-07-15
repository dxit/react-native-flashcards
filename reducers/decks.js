import { SET_INITIAL_DATA } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SET_INITIAL_DATA:
			return {
				...state,
				...action.data
			};
		default:
			return state
	}
}