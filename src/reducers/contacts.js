import contacts from '../../public/contacts';
import objectsToMapByKey from '../utils';

import { START_NEW_CONVERSATION } from '../actions/types';

// const contactsMap = new Map(contacts.map(user => [user.userId, user]));
const contactsMap = objectsToMapByKey(contacts, 'userId');

export default (state = contactsMap, action) => {
	// console.log(action);
	switch (action.type) {
		case START_NEW_CONVERSATION:
			return new Map(state).set(action.payload.userId, action.payload);

		default:
			return state;
	}
};
