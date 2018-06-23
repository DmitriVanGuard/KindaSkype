import { SET_TYPING_VALUE } from '../constants/actionTypes';

export default (state = '', action) => {
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;

		default:
			return state;
	}
};
