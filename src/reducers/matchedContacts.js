import objectsToMapByKey from '../utils';
import { CONTACT_SEARCH_SUCCESS, CONTACT_SEARCH_RESET } from '../actions/types';

// const contactsMap = new Map(contacts.map(user => [user.userId, user]));

export default (state = null, action) => {
	// console.log(action);
	switch (action.type) {
		case CONTACT_SEARCH_RESET:
			return null;

		case CONTACT_SEARCH_SUCCESS:
			return action.payload && objectsToMapByKey(action.payload, 'userId');

		default:
			return state;
	}
};
