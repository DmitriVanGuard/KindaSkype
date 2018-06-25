import { ADD_NOTIFICATION, CLICK_NOTIFICATION } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case ADD_NOTIFICATION:
			return new Map(state).set(action.payload.contactId, action.payload);

		case CLICK_NOTIFICATION: {
			const newState = new Map(state);
			newState.delete(action.payload.contactId);
			return newState;
		}

		default:
			return state;
	}
};
