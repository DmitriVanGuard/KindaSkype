import contacts from '../../public/contacts';
import objectsToMapByKey from '../utils';

import { START_NEW_CONVERSATION, CLICK_NOTIFICATION } from '../actions/types';

const contactsMap = objectsToMapByKey(contacts, 'contactId');

export default (state = contactsMap, action) => {
	switch (action.type) {
		case CLICK_NOTIFICATION:
		case START_NEW_CONVERSATION:
			return state.get(action.payload.contactId)
				? state
				: new Map(state).set(action.payload.contactId, action.payload);

		default:
			return state;
	}
};
