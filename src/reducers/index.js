import { combineReducers } from 'redux';

import client from './client';
import contacts from './contacts';
import chosenContactId from './chosenContactId';
import conversations from './conversations';

export default combineReducers({
	client,
	contacts,
	chosenContactId,
	conversations
});
