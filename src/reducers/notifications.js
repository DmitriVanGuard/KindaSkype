import { ADD_NOTIFICATION } from '../actions/types';

export default (state = null, action) => {
	console.log(action);
	switch (action.type) {
		case ADD_NOTIFICATION:
			return new Map(state).set(action.payload.contactId, action.payload);

		default:
			return state;
	}
	// case SEND_MESSAGE:{
	// 	const { message, contactId } = action.payload;

	// 	const conversation = state.get(contactId);

	// 	const lastMsgNumber =
	// 		conversation && conversation.size
	// 			? Array.from(conversation.values())[conversation.size - 1].number + 1
	// 			: 0;

	// 	const updatedConversation = new Map(conversation).set(lastMsgNumber, {
	// 		number: lastMsgNumber,
	// 		text: message,
	// 		isClientMsg: action.type === SEND_MESSAGE
	// 	});

	// 	const newState = new Map(state);
	// 	newState.set(contactId, updatedConversation);
	// 	return newState;
	// }

	// 	case DELETE_MESSAGE: {
	// 		const { contactId, messageNumber } = action.payload;

	// 		const conversation = state.get(contactId);
	// 		const updatedConversation = new Map(conversation);
	// 		updatedConversation.delete(messageNumber);

	// 		const newState = new Map(state).set(contactId, updatedConversation);
	// 		return newState;
	// 	}

	// 	case SAVE_MESSAGE: {
	// 		const { contactId, messageNumber, message } = action.payload;

	// 		const conversation = state.get(contactId);
	// 		const updatedConversation = new Map(conversation).set(messageNumber, {
	// 			number: messageNumber,
	// 			text: message,
	// 			isClientMsg: true
	// 		});

	// 		const newState = new Map(state).set(contactId, updatedConversation);
	// 		return newState;
	// 	}

	// 	case START_NEW_CONVERSATION:
	// 		return state.get(action.payload.userId)
	// 			? state
	// 			: new Map(state).set(action.payload.userId, new Map());

	// 	default:
	// 		return state;
};
