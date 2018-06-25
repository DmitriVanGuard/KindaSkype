import objectsToMapByKey from '../utils';
import { CONTACT_SEARCH_SUCCESS, CONTACT_SEARCH_RESET } from '../actions/types';

export default (state = false, action) => {
	switch (action.type) {
		case CONTACT_SEARCH_RESET:
			return false;

		case CONTACT_SEARCH_SUCCESS:
			return action.payload && objectsToMapByKey(action.payload, 'contactId');

		default:
			return state;
	}
};
