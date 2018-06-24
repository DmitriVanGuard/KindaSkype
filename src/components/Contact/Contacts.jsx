import React from 'react';

import Contact from './Contact';

const Contacts = ({ contacts }) =>
	contacts
		? Array.from(contacts.values()).map(contact => (
				<Contact contact={contact} key={contact.userId} />
		  ))
		: 'No contacts with such username were found :(';

export default Contacts;
