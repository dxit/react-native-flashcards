import { ADD_POINT, RESET_SCORE } from './types';

export const addPoint = () => ({
	type: ADD_POINT
});

export const resetScore = () => ({
	type: RESET_SCORE
});