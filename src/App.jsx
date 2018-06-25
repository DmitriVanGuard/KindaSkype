import React from 'react';
import { Provider } from 'react-redux';

import ScreensLogin from './screens/Login';
import ScreensChat from './screens/Chat';

import store from './store';
import Client from './utils/socket';
import { isStatusOK } from './utils';

import './App.css';

Client.onReceiveMessage = ({ status, data }) => {
	if (isStatusOK(status)) {
		store.dispatch({
			type: 'RECEIVE_MESSAGE',
			payload: data
		});
		if (store.getState().chosenContactId !== data.contactId) {
			store.dispatch({ type: 'ADD_NOTIFICATION', payload: data });
		}
	}
};

const App = () => (
	<Provider store={store}>
		<div className="App">
			{store.getState().client.username !== '' ? (
				<ScreensChat />
			) : (
				<ScreensLogin />
			)}
		</div>
	</Provider>
);

export default App;
