import io from 'socket.io-client';

const socket = io();

class Client {
	constructor() {
		this.socket = socket;

		this.socket.on('message', answer => this.handlePromise(answer));
		this.socket.on('login', answer => this.handlePromise(answer));
		this.socket.on('SEND_MESSAGE', answer => this.handlePromise(answer));
		this.socket.on('CONTACT_SEARCH', answer => this.handlePromise(answer));
	}

	// emit(type, payload, timeout = 5000) {
	emit(type, payload) {
		return new Promise((resolve, reject) => {
			this.handlePromise = answer =>
				answer.status === 'OK' ? resolve(answer.data) : reject(answer);

			this.socket.emit(type, payload);
		});
	}
}

// socket.on('login', answer => console.log('Login ws received', answer));

const client = new Client();

export default client;
