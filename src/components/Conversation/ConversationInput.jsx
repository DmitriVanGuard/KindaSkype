import React from 'react';
import store from '../../store';
import {
	setTypingValue,
	sendMessage,
	saveMessage
} from '../../actions/rootActions';

import './ConversationInput.css';

const handleInputChange = e => {
	store.dispatch(setTypingValue(e.currentTarget.value));
};

const handleFormSubmit = e => {
	e.preventDefault();
	const { typing, chosenContactId, editedMsgNumber } = store.getState();
	if (typing === '') return;

	store.dispatch(
		editedMsgNumber === null
			? sendMessage(typing, chosenContactId)
			: saveMessage(chosenContactId, editedMsgNumber, typing)
	);
};

const ConversationInput = ({ value }) => (
	<form className="ConversationInput" onSubmit={handleFormSubmit}>
		<input
			type="text"
			placeholder="Write a message..."
			className="ConversationInput__input"
			value={value}
			onChange={handleInputChange}
		/>
	</form>
);

export default ConversationInput;
