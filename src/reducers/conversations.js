import { SEND_MESSAGE, DELETE_MESSAGE, SAVE_MESSAGE } from '../actions/types';

import conversations from '../../public/conversations';

const conversationsMap = new Map(
	Object.keys(conversations).map(conversation => [
		parseInt(conversation, 10),
		new Map(
			conversations[conversation].map(message => [message.number, message])
		)
	])
);

export default (state = conversationsMap, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const { message, contactId } = action.payload;

			const conversation = state.get(contactId);

			const lastMsgNumber =
				Array.from(conversation.values())[conversation.size - 1].number + 1;

			const updatedConversation = new Map(conversation).set(lastMsgNumber, {
				number: lastMsgNumber,
				text: message,
				isClientMsg: true
			});

			const newState = new Map(state);
			newState.set(contactId, updatedConversation);
			return newState;
		}

		case DELETE_MESSAGE: {
			const { contactId, messageNumber } = action.payload;

			const conversation = state.get(contactId);
			const updatedConversation = new Map(conversation);
			updatedConversation.delete(messageNumber);

			const newState = new Map(state).set(contactId, updatedConversation);
			return newState;
		}

		case SAVE_MESSAGE: {
			const { contactId, messageNumber, message } = action.payload;

			const conversation = state.get(contactId);
			const updatedConversation = new Map(conversation).set(messageNumber, {
				number: messageNumber,
				text: message,
				isClientMsg: true
			});

			const newState = new Map(state).set(contactId, updatedConversation);
			return newState;
		}

		default:
			return state;
	}
};
