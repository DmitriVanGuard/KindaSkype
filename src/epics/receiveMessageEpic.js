import { RECEIVE_MESSAGE } from '../actions/types';
import { addNotification } from '../actions/rootActions';

const receiveMessageEpic = (action$, store) =>
	action$
		.ofType(RECEIVE_MESSAGE)
		.filter(
			action => action.payload.contactId !== store.getState().chosenContactId
		)
		.map(action => store.dispatch(addNotification(action.payload)));

export default receiveMessageEpic;
