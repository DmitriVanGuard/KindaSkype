import React from 'react';
import store from '../../store';
import { setTypingValue } from '../../actions';

import './ChatInput.css';

const handleInputChange = e => {
	e.preventDefault();
	store.dispatch(setTypingValue(e.currentTarget.value));
};

const ChatInput = ({ value }) => {
	return (
		<form className="ChatInput">
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
