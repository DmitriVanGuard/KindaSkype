import io from 'socket.io-client';
import { isStatusOK } from './index';
import * as Action from '../actions/types';

const socket = io();

// function onMessageReceive({ status, data }) {
// 	if (isStatusOK(status))
// 		store.dispatch({ type: Action.RECEIVE_MESSAGE, payload: data });
// }

class Client {
	constructor() {
		this.socket = socket;
		this._onReceiveMessage = null;

		this.socket.on('message', answer => this.handlePromise(answer));
		this.socket.on('login', answer => this.handlePromise(answer));
		this.socket.on(Action.SEND_MESSAGE, answer => this.handlePromise(answer));
		this.socket.on(Action.CONTACT_SEARCH, answer => this.handlePromise(answer));

		this.socket.on(Action.RECEIVE_MESSAGE, answer =>
			this._onReceiveMessage(answer)
		);
	}

	// emit(type, payload, timeout = 5000) {
	emit(type, payload) {
		return new Promise((resolve, reject) => {
			this.handlePromise = answer =>
				isStatusOK(answer.status) ? resolve(answer.data) : reject(answer);

			this.socket.emit(type, payload);
		});
	}

	set onReceiveMessage(clb) {
		if (typeof clb === 'function') this._onReceiveMessage = clb;
		else throw new Error('You can assign only callback to onReceiveMessage');
	}
}

// socket.on('login', answer => console.log('Login ws received', answer));

const client = new Client();

export default client;
