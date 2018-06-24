import React from 'react';

import store from '../../store';
import {
	setChosenContactId,
	startNewConversation
} from '../../actions/rootActions';

import './Contact.css';

function handleUserClick({ userId }) {
	console.log(userId);
	const { matchedContacts } = store.getState();

	store.dispatch(
		matchedContacts
			? startNewConversation(matchedContacts.get(userId))
			: setChosenContactId(userId)
	);
}

const Contact = ({ contact }) => {
	const { name, profilePic, status } = contact;
	return (
		<div className="Contact" onClick={() => handleUserClick(contact)}>
			<img
				src={
					profilePic ||
					'https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg'
				}
				alt={`${name} pic`}
				className="Contact__pic"
			/>
			<div className="Contact__details">
				<p className="Contact__details-name">{name}</p>
				<p className="Contact__details-status">{status}</p>
			</div>
		</div>
	);
};

export default Contact;
