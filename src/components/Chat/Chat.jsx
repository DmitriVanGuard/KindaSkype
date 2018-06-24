import React from 'react';

import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import ChatInput from './ChatInput';

import store from '../../store';

import './Chat.css';

const Chat = ({ chosenContactId }) => {
	const state = store.getState();
	const chosenContact = state.contacts.get(chosenContactId);
	const messages = state.conversations.get(chosenContactId);

	return (
		<div className="Chat">
			<Header contact={chosenContact} />
			<Messages messages={messages} />
			<ChatInput value={state.typing} />
		</div>
	);
};

export default Chat;
