/* eslint-disable */

import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
// import {} from '../actions/rootActions';
import Client from '../utils/socket';
import {
	CONTACT_SEARCH,
	CONTACT_SEARCH_SUCCESS,
	CONTACT_SEARCH_RESET
} from '../actions/types';

export const resetContactSearch = () => ({ type: CONTACT_SEARCH_RESET });

export const searchContact = contact => {
	console.log(contact, ' to search');
	return {
		type: CONTACT_SEARCH,
		payload: contact
	};
};
const searchContactFulfilled = payload => ({
	type: CONTACT_SEARCH_SUCCESS,
	payload
});

const searchContactEpic = action$ =>
	action$.ofType(CONTACT_SEARCH).mergeMap(action => {
		console.log(action);
		return Observable.fromPromise(
			Client.emit(action.type, action.payload)
		).pipe(map(response => searchContactFulfilled(response)));
	});

export default searchContactEpic;
