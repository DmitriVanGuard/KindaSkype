import { SET_CHOSEN_CONTACT_ID } from '../constants/actionTypes';

export const setChosenContactId = id => ({
	type: SET_CHOSEN_CONTACT_ID,
	payload: id
});
