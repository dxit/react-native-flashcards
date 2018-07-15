import { SET_INITIAL_DATA } from './types';

export function setInitialData(data) {
	return {
		type: SET_INITIAL_DATA,
		data
	}
};