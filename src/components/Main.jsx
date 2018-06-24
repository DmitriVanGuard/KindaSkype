import React from 'react';
import { connect } from 'react-redux';

import Welcome from './Welcome/Welcome';
import Chat from './Chat/Chat';

import './Main.css';

const Main = ({ client, chosenContactId }) => (
	<main className="Main">
		{chosenContactId !== null ? <Chat /> : <Welcome client={client} />}
	</main>
);

const mapStateToProps = state => ({
	client: state.client,
	chosenContactId: state.chosenContactId
});

export default connect(mapStateToProps)(Main);
