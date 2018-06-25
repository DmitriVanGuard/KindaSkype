import React from 'react';
import { connect } from 'react-redux';

import Welcome from './Welcome/Welcome';
import Conversation from './Conversation/Conversation';

import './Main.css';

const Main = ({ client, chosenContactId }) => (
	<main className="Main">
		{chosenContactId !== null ? <Conversation /> : <Welcome client={client} />}
	</main>
);

const mapStateToProps = state => ({
	client: state.client,
	chosenContactId: state.chosenContactId
});

export default connect(mapStateToProps)(Main);
