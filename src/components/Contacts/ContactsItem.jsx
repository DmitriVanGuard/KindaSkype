import React from 'react';

import store from '../../store';
import {
	setChosenContactId,
	startNewConversation
} from '../../actions/rootActions';

import './ContactsItem.css';

function handleUserClick({ contactId }) {
	const { matchedContacts } = store.getState();
	store.dispatch(
		matchedContacts
			? startNewConversation(matchedContacts.get(contactId))
			: setChosenContactId(contactId)
	);
}

const ContactsItem = ({ contact }) => {
	const { name, profilePic, status } = contact;
	return (
		<div className="ContactsItem" onClick={() => handleUserClick(contact)}>
			<img
				src={
					profilePic ||
					'https://s3.amazonaws.com/uifaces/faces/twitter/mauriolg/128.jpg'
				}
				alt={`${name} pic`}
				className="ContactsItem__pic"
			/>
			<div className="ContactsItem__details">
				<p className="ContactsItem__details-name">{name}</p>
				<p className="ContactsItem__details-status">{status}</p>
			</div>
		</div>
	);
};

export default ContactsItem;
