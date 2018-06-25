import {
	SET_CHOSEN_CONTACT_ID,
	START_NEW_CONVERSATION,
	CLICK_NOTIFICATION
} from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case SET_CHOSEN_CONTACT_ID:
			return action.payload;

		case START_NEW_CONVERSATION:
		case CLICK_NOTIFICATION:
			return action.payload.contactId;

		default:
			return state;
	}
};
