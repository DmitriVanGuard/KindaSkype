import React from 'react';
import { connect } from 'react-redux';

import Contact from '../Contact/Contact';
import SidebarSearch from './SidebarSearch';

import './Sidebar.css';

const Sidebar = ({ contacts }) => (
	<aside className="Sidebar">
		<SidebarSearch />
		{Array.from(contacts.values()).map(contact => (
			<Contact contact={contact} key={contact.userId} />
		))}
	</aside>
);

const mapStateToProps = state => ({ contacts: state.contacts });

export default connect(mapStateToProps)(Sidebar);
