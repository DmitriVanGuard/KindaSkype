import React from 'react';

import Header from '../../components/Header/Header';
import store from '../../store';

const Chat = ({ chosenContactId }) => {
	const state = store.getState();
	const chosenContact = state.contacts.get(chosenContactId);

	return (
		<div className="Chat">
			<Header contact={chosenContact} />
		</div>
	);
};

export default Chat;
