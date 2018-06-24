import io from 'socket.io-client';

class Client {
	constructor() {
		this.socket = io();
	}

	emit(type, payload) {
		return new Promise((resolve, reject) => {
			this.socket.emit(type, payload);

			this.socket.on(
				type,
				answer =>
					answer.status === 'OK' ? resolve(answer.data) : reject(answer)
			);
		});
	}
}

export default new Client();
