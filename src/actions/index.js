import {
	SET_CHOSEN_CONTACT_ID,
	SET_TYPING_VALUE
} from '../constants/actionTypes';

export const setChosenContactId = id => ({
	type: SET_CHOSEN_CONTACT_ID,
	payload: id
});

export const setTypingValue = value => ({
	type: SET_TYPING_VALUE,
	payload: value
});
