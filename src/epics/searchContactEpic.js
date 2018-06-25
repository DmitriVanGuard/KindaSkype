import { Observable } from 'rxjs/Rx';

import Client from '../utils/socket';
import {
	CONTACT_SEARCH,
	CONTACT_SEARCH_SUCCESS,
	CONTACT_SEARCH_RESET
} from '../actions/types';

export const resetContactSearch = () => ({ type: CONTACT_SEARCH_RESET });

export const searchContact = contact => ({
	type: CONTACT_SEARCH,
	payload: contact
});

const searchContactFulfilled = payload => ({
	type: CONTACT_SEARCH_SUCCESS,
	payload
});

const searchContactEpic = action$ =>
	action$
		.ofType(CONTACT_SEARCH)
		.mergeMap(action =>
			Observable.fromPromise(Client.emit(action.type, action.payload)).map(
				response => searchContactFulfilled(response)
			)
		);

export default searchContactEpic;
