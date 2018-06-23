import React from 'react';

import Welcome from './Welcome/Welcome';
import Chat from './Chat/Chat';

import './Main.css';

const Main = ({ client, chosenContactId }) => {
	return (
		<main className="Main">
			{chosenContactId !== null ? (
				<Chat chosenContactId={chosenContactId} />
			) : (
				<Welcome client={client} />
			)}
		</main>
	);
};

export default Main;
