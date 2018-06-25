import {
	SET_CHOSEN_CONTACT_ID,
	SET_TYPING_VALUE,
	SEND_MESSAGE,
	DELETE_MESSAGE,
	EDIT_MESSAGE,
	SAVE_MESSAGE,
	USER_LOGIN,
	START_NEW_CONVERSATION,
	RECEIVE_MESSAGE,
	ADD_NOTIFICATION
} from './types';

export const setChosenContactId = id => ({
	type: SET_CHOSEN_CONTACT_ID,
	payload: id
});

export const startNewConversation = contact => ({
	type: START_NEW_CONVERSATION,
	payload: contact
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

export const receiveMessage = (message, contactId) => ({
	type: RECEIVE_MESSAGE,
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

export const loginUser = username => ({
	type: USER_LOGIN,
	payload: username
});

export const addNotification = (message, contactId) => ({
	type: ADD_NOTIFICATION,
	payload: {
		message,
		contactId
	}
});
