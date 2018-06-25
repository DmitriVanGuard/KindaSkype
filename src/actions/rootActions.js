import * as Action from './types';

export const setChosenContactId = id => ({
	type: Action.SET_CHOSEN_CONTACT_ID,
	payload: id
});

export const startNewConversation = contact => ({
	type: Action.START_NEW_CONVERSATION,
	payload: contact
});

export const setTypingValue = value => ({
	type: Action.SET_TYPING_VALUE,
	payload: value
});

export const sendMessage = (message, contactId) => ({
	type: Action.SEND_MESSAGE,
	payload: {
		message,
		contactId
	}
});

export const receiveMessage = ({ message, contactId, name }) => ({
	// TODO: refactor
	type: Action.RECEIVE_MESSAGE,
	payload: {
		message,
		contactId,
		name
	}
});

export const deleteMessage = (contactId, messageNumber) => ({
	type: Action.DELETE_MESSAGE,
	payload: { contactId, messageNumber }
});

export const editMessage = (messageNumber, message) => ({
	type: Action.EDIT_MESSAGE,
	payload: { messageNumber, message }
});

export const saveMessage = (contactId, messageNumber, message) => ({
	type: Action.SAVE_MESSAGE,
	payload: { contactId, messageNumber, message }
});

export const loginUser = username => ({
	type: Action.USER_LOGIN,
	payload: username
});

export const addNotification = ({ message, contactId, name }) => ({
	type: Action.ADD_NOTIFICATION,
	payload: {
		contactId,
		name,
		message
	}
});

export const clickNotification = ({ contactId, name, message }) => ({
	type: Action.CLICK_NOTIFICATION,
	payload: {
		contactId,
		name,
		message
	}
});
