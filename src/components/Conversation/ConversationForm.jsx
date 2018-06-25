import React from 'react';
import store from '../../store';
import {
	setTypingValue,
	sendMessage,
	saveMessage
} from '../../actions/rootActions';

import Input from '../ui/Input';

import Client from '../../utils/socket';
import './ConversationForm.css';

const handleInputChange = e => {
	store.dispatch(setTypingValue(e.currentTarget.value));
};

const handleFormSubmit = e => {
	e.preventDefault();
	const {
		typing,
		chosenContactId,
		contacts,
		editedMsgNumber
	} = store.getState();
	if (typing === '') return;

	store.dispatch(
		editedMsgNumber === null
			? sendMessage(typing, chosenContactId)
			: saveMessage(chosenContactId, editedMsgNumber, typing)
	);

	Client.emit('SEND_MESSAGE', {
		receipient: contacts.get(chosenContactId).name,
		message: typing
	});
};

const ConversationForm = ({ value }) => (
	<form className="ConversationForm" onSubmit={handleFormSubmit}>
		<Input value={value} onChange={handleInputChange} />
	</form>
);

export default ConversationForm;
