/* eslint-disable */

import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
// import {} from '../actions/rootActions';
import Client from '../utils/socket';
import { SEND_MESSAGE } from '../actions/types';
// import { isStatusOK } from '../utils';

// export const resetContactSearch = () => ({ type: CONTACT_SEARCH_RESET });

// export const sendMessage = contact => ({
// 	type: SEND_MESSAGE,
// 	payload: contact
// });

// const searchContactFulfilled = payload => ({
// 	type: CONTACT_SEARCH_SUCCESS,
// 	payload
// });
export const onMessageReceive = ({ status, data }) => {
	// if (isStatusOK(status))
	store.dispatch({ type: Action.RECEIVE_MESSAGE, payload: data });
};

const sendMessageEpic = action$ =>
	action$.ofType(SEND_MESSAGE).mergeMap(action => {
		console.log('%c!EPIC!', 'background: red; color: #FFF', action);
		return Observable.fromPromise(
			Client.emit(action.type, action.payload)
		).pipe(map(response => searchContactFulfilled(response)));
	});

export default sendMessageEpic;
