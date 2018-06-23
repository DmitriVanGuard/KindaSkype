import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../actions';

import './ChatInput.css';

const handleInputChange = e => {
	store.dispatch(setTypingValue(e.currentTarget.value));
};

const handleFormSubmit = e => {
	e.preventDefault();
	const { typing, chosenContactId } = store.getState();
	store.dispatch(sendMessage(typing, chosenContactId));
	store.dispatch(setTypingValue(''));
};

const ChatInput = ({ value }) => {
	return (
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
};

export default ChatInput;
