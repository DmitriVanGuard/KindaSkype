import { USER_LOGIN } from '../actions/types';

export default (state = { username: '', contactId: 0 }, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return Object.assign({}, state, { username: action.payload });

		default:
			return state;
	}
};
