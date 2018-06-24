import io from 'socket.io-client';

class Client {
	constructor() {
		this.socket = io();
	}

	emit(type, payload, timeout = 5000) {
		return new Promise((resolve, reject) => {
			this.socket.emit(type, payload);

			this.socket.on(
				type,
				answer =>
					answer.status === 'OK' ? resolve(answer.data) : reject(answer)
			);

			setTimeout(() => {
				reject({ status: 'TIMEOUT', data: 'Time has run out' });
			}, timeout);
		});
	}
}

export default new Client();
