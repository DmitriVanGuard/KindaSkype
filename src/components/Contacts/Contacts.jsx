import React from 'react';

import ContactsItem from './ContactsItem';

const Contacts = ({ contacts }) =>
	contacts
		? Array.from(contacts.values()).map(contact => (
				<ContactsItem contact={contact} key={contact.contactId} />
		  ))
		: 'No contacts with such username were found :(';

export default Contacts;
