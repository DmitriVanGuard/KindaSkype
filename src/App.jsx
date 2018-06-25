import React from 'react';
import { Provider } from 'react-redux';
import { Subject } from 'rxjs';

import ScreensLogin from './screens/Login';
import ScreensChat from './screens/Chat';

import store from './store';
import Client from './utils/socket';
import { isStatusOK } from './utils';

import { receiveMessage } from './actions/rootActions';

import './App.css';

Client.onReceiveMessage$ = new Subject();
Client.subscribtion = Client.onReceiveMessage$.subscribe(data =>
	store.dispatch(receiveMessage(data))
);

Client.onReceiveMessage = ({ status, data }) => {
	if (isStatusOK(status)) {
		Client.onReceiveMessage$.next(data);
		// store.dispatch(receiveMessage(data));
		// if (store.getState().chosenContactId !== data.contactId) {
		// 	store.dispatch({ type: 'ADD_NOTIFICATION', payload: data });
		// }
	}
};
/* 
1) this.onContactSearch$ = new Subject();

Client.onReceiveMessage$ = new Subject();

--------------
2) this.subscription = this.onContactSearch$.debounceTime(700).subscribe(username => {
	console.log(username);
	store.dispatch(
		username !== '' ? searchContact(username) : resetContactSearch()
	);
});

Client.addSubscription(
	Client.onContactSearch$.subscribe(data => store.dispatch(receiveMessage(data)))
)

--------------
3) this.onContactSearch$.next(match); // when event occurs

Client.onReceiveMessage$.next(data);

--------------
4) if (this.subscription) this.subscription.unsubscribe();
*/

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
