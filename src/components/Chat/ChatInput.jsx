import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage, saveMessage } from '../../actions';

import './ChatInput.css';

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

const ChatInput = ({ value }) => (
	<form className="ChatInput" onSubmit={handleFormSubmit}>
		<input
			type="text"
			placeholder="Write a message..."
			className="ChatInput__input"
			value={value}
			onChange={handleInputChange}
		/>
	</form>
);

export default ChatInput;
