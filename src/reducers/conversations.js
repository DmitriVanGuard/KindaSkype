import { SEND_MESSAGE } from '../constants/actionTypes';

import conversations from '../../public/conversations';

const conversationsMap = new Map(
	Object.keys(conversations).map(conversation => [
		parseInt(conversation, 10),
		conversations[conversation]
	])
);

export default (state = conversationsMap, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			const { message, contactId } = action.payload;
			const newState = new Map(state);
			const messages = newState.get(contactId);
			const updatedConversation = [
				...messages,
				{ number: messages.length, text: message, isClientMsg: true }
			];
			newState.set(contactId, updatedConversation);
			return newState;

		default:
			return state;
	}
};
