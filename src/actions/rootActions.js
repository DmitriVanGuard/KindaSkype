import {
	SET_CHOSEN_CONTACT_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	DELETE_MESSAGE,
	EDIT_MESSAGE,
	SAVE_MESSAGE
} from './types';

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

export const deleteMessage = (contactId, messageNumber) => ({
	type: DELETE_MESSAGE,
	payload: { contactId, messageNumber }
});

export const editMessage = (messageNumber, message) => ({
	type: EDIT_MESSAGE,
	payload: { messageNumber, message }
});

export const saveMessage = (contactId, messageNumber, message) => ({
	type: SAVE_MESSAGE,
	payload: { contactId, messageNumber, message }
});