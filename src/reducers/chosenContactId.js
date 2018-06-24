import {
	SET_CHOSEN_CONTACT_ID,
	START_NEW_CONVERSATION
} from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SET_CHOSEN_CONTACT_ID:
			return action.payload;

		case START_NEW_CONVERSATION:
			return action.payload.userId;

		default:
			return state;
	}
};
