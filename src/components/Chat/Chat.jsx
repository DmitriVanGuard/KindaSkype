import React from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Messages from '../Messages/Messages';
import ChatInput from './ChatInput';

// import store from '../../store';

import './Chat.css';

const Chat = ({ chosenContact, messages, typing }) => (
	// const state = store.getState();
	// const chosenContact = state.contacts.get(chosenContactId);
	// const messages = state.conversations.get(chosenContactId);

	<div className="Chat">
		<Header contact={chosenContact} />
		<Messages messages={messages} />
		<ChatInput value={typing} />
	</div>
);

const mapStateToProps = ({
	typing,
	chosenContactId,
	contacts,
	conversations
}) => ({
	chosenContact: contacts.get(chosenContactId),
	messages: conversations.get(chosenContactId),
	typing
});

export default connect(mapStateToProps)(Chat);
