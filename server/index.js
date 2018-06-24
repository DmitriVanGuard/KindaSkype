const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const config = require('./config');

const clients = new Map();

app.use('*', (req, res, next) => {
	if (req.originalUrl.indexOf('socket.io/') === -1) {
		proxy(`${config.HOST}:${config.PROXY_PORT}`, {
			proxyReqPathResolver: req => req.originalUrl
		})(req, res, next);
	}
});

io.on('connection', socket => {
	console.log('New user has connected to the server...');

	socket.on('disconnect', () => {
		if (!socket.hasOwnProperty('username')) return;
		console.log(
			`${socket.username} has disconnected and his socket was deleted...`
		);
		// console.log(Array.from(clients.keys()));
		clients.delete(socket.username);
		// console.log(Array.from(clients.keys()));
	});

	socket.on('login', username => {
		console.log(username);
		// setTimeout(() => {
		if (username && !clients.has(username)) {
			clients.set(username, socket);
			socket.username = username;
			socket.emit(
				'login',
				createAnswer('OK', `everything ok, your username ${username}`)
			);
		}
		socket.emit(
			'login',
			createAnswer('ERROR', `Please, choose another username`)
		);

		// }, 500);
		// console.log(io.sockets);
	});

	socket.on('CONTACT_SEARCH', contactUsername => {
		if (contactUsername) {
			socket.emit(
				'CONTACT_SEARCH',
				createAnswer('OK', [{ userId: 555, name: contactUsername }])
			);
		}
	});
});

http.listen(config.PORT, config.HOST, () =>
	console.log(`Listening on port ${config.PORT}...`)
);

function createAnswer(status, data) {
	return {
		status,
		data
	};
}
