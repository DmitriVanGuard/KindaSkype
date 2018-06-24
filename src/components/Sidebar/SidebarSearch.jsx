import React from 'react';

import SidebarSearchResults from './SidebarSearchResults';
import store from '../../store';

const SidebarSearch = () => {
	const { matchedContacts } = store.getState();
	return (
		<div className="Search">
			<input type="text" placeholder="Search for a contact..." />
			{matchedContacts && (
				<SidebarSearchResults matchedContacts={matchedContacts} />
			)}
		</div>
	);
};

export default SidebarSearch;
