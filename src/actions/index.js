import {
	SET_CHOSEN_CONTACT_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE
} from '../constants/actionTypes';

export const setChosenContactId = id => ({
	type: SET_CHOSEN_CONTACT_ID,
	payload: id
});

export const setTypingValue = value => ({
	type: SET_TYPING_VALUE,
	payload: value
});

export const sendMessage = (message, contactId) => ({
	type: SEND_MESSAGE,
	payload: {
		message,
		contactId
	}
});
