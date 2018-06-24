import {
	SET_CHOSEN_CONTACT_ID,
	EDIT_MESSAGE,
	DELETE_MESSAGE,
	SAVE_MESSAGE
} from '../actions/types';

export default (state = '', action) => {
	switch (action.type) {
		case SAVE_MESSAGE:
		case DELETE_MESSAGE:
		case SET_CHOSEN_CONTACT_ID:
			return null;

		case EDIT_MESSAGE:
			return action.payload.messageNumber;

		default:
			return state;
	}
};
