import React from 'react';
import { Provider } from 'react-redux';
import { Subject } from 'rxjs';

import Client from './utils/socket';
import { isStatusOK } from './utils';
import store from './store';
import { receiveMessage } from './actions/rootActions';

import ScreensLogin from './screens/Login';
import ScreensChat from './screens/Chat';

import './App.css';

Client.onReceiveMessage$ = new Subject();
Client.subscribtion = Client.onReceiveMessage$.subscribe(data =>
	store.dispatch(receiveMessage(data))
);
Client.onReceiveMessage = ({ status, data }) => {
	if (isStatusOK(status)) {
		Client.onReceiveMessage$.next(data);
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
