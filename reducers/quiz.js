import { ADD_POINT, RESET_SCORE } from '../actions/types';

export default (state = 0, action) => {
	switch (action.type) {
		case ADD_POINT:
			return {
				score: state.score + 1
			};
		case RESET_SCORE:
			return {
				score: 0
			};
		default:
			return state
	}
}