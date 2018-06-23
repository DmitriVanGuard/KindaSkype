import React from 'react';

import store from '../../store';
import { setChosenContactId } from '../../actions/';

import './Contact.css';

function handleUserClick({ userId }) {
	console.log(userId);
	store.dispatch(setChosenContactId(userId));
}

const Contact = ({ contact }) => {
	const { name, profilePic, status } = contact;
	return (
		<div className="Contact" onClick={handleUserClick.bind(null, contact)}>
			<img src={profilePic} alt={`${name} pic`} className="Contact__pic" />
			<div className="Contact__details">
				<p className="Contact__details-name">{name}</p>
				<p className="Contact__details-status">{status}</p>
			</div>
		</div>
	);
};

export default Contact;
