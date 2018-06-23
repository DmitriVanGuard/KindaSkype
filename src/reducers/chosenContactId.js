import { SET_CHOSEN_CONTACT_ID } from '../constants/actionTypes';

export default (state = null, action) => {
	switch (action.type) {
		case SET_CHOSEN_CONTACT_ID:
			return action.payload;

		default:
			return state;
	}
};
