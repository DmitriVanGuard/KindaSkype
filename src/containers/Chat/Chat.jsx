import React from 'react';

import Header from '../../components/Header/Header';
import Messages from '../../components/Messages/Messages';

import store from '../../store';

const Chat = ({ chosenContactId }) => {
	const state = store.getState();
	const chosenContact = state.contacts.get(chosenContactId);
	const messages = state.conversations.get(chosenContactId);

	return (
		<div className="Chat">
			<Header contact={chosenContact} />
			<Messages messages={messages} />
		</div>
	);
};

export default Chat;
