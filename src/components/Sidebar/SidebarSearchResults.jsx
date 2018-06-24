import React from 'react';

const SidebarSearchResult = ({ matchedContacts }) => (
	<div>
		{matchedContacts.map(contact => (
			<div className="SearchResult" key={contact.username}>
				<h4 className="SearchResult__username">{contact.username}</h4>
			</div>
		))}
	</div>
);

export default SidebarSearchResult;
