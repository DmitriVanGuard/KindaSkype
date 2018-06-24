import {
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	EDIT_MESSAGE,
	SAVE_MESSAGE
} from '../actions/types';

export default (state = '', action) => {
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;

		case SEND_MESSAGE:
		case SAVE_MESSAGE:
			return '';

		case EDIT_MESSAGE:
			return action.payload.message;

		default:
			return state;
	}
};
