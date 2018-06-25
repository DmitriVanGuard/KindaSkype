import { RECEIVE_MESSAGE } from '../actions/types';
import { addNotification } from '../actions/rootActions';

const receiveMessageEpic = (action$, state$) =>
	action$
		.ofType(RECEIVE_MESSAGE)
		.filter(
			action => action.payload.contactId !== state$.getState().chosenContactId
		)
		.map(action => state$.dispatch(addNotification(action.payload)));

export default receiveMessageEpic;
