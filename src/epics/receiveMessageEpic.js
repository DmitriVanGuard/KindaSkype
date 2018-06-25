import { Observable } from 'rxjs/Rx';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
// import {} from '../actions/rootActions';
// import Client from '../utils/socket';

import { RECEIVE_MESSAGE } from '../actions/types';
import { addNotification } from '../actions/rootActions';
// import chosenContactId from '../reducers/chosenContactId';

// export const resetContactSearch = () => ({ type: CONTACT_SEARCH_RESET });

// export const searchContact = contact => ({
// 	type: CONTACT_SEARCH,
// 	payload: contact
// });

// const searchContactFulfilled = payload => ({
// 	type: CONTACT_SEARCH_SUCCESS,
// 	payload
// });

const receiveMessageEpic = (action$, state$) =>
	action$
		.ofType(RECEIVE_MESSAGE)
		.filter(chosenContactId => chosenContactId !== state$.chosenContactId)
		.map(action => {
			console.log(action, state$);
			return Observable.from(addNotification(action.payload));
		});

export default receiveMessageEpic;
