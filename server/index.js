const path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const config = require('./config');

const clients = new Map();

if (process.env.NODE_ENV === 'dev_server') {
	app.use('*', (req, res, next) => {
		if (req.originalUrl.indexOf('socket.io/') === -1) {
			proxy(`${config.HOST}:${config.PROXY_PORT}`, {
				proxyReqPathResolver: req => req.originalUrl
			})(req, res, next);
		}
	});
} else {
	app.get('*.js', (req, res, next) => {
		req.url = `${req.url}.gz`;
		res.set('Content-Encoding', 'gzip');
		next();
	});

	app.use(express.static(path.join(__dirname, '../build')));
}

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
		if (!username || clients.has(username)) {
			console.log(`Sending login error WS to ${username}`);

			createAnswer({
				to: socket,
				type: 'login',
				status: 'ERROR',
				data: `Username - '${username}' is already taken. Please, choose another username`
			});
			return;
		}

		clients.set(username, socket);
		socket.username = username;
		console.log(`Sending login success WS to ${username}`);

		createAnswer({
			to: socket,
			type: 'login',
			status: 'OK',
			data: `everything ok, your username ${username}`
		});
	});

	socket.on('CONTACT_SEARCH', contactUsername => {
		if (contactUsername && socket.username !== contactUsername) {
			const contact = clients.get(contactUsername);

			const data =
				contact === undefined
					? null
					: [
							{
								contactId: clients.get(contactUsername).id,
								name: contactUsername,
								status: 'Online'
							}
					  ];

			createAnswer({
				to: socket,
				type: 'CONTACT_SEARCH',
				status: 'OK',
				data
			});
		}
	});

	socket.on('SEND_MESSAGE', ({ receipient, message }) => {
		if (!clients.has(receipient)) return;

		console.log(
			`Send message[${message}] from ${socket.username} to ${receipient}`
		);

		createAnswer({
			to: clients.get(receipient),
			type: 'RECEIVE_MESSAGE',
			status: 'OK',
			data: {
				contactId: socket.id,
				name: socket.username,
				message
			}
		});
	});
});

http.listen(config.PORT, config.HOST, () =>
	console.log(`Listening on port ${config.PORT}...`)
);

function createAnswer({ to, type, status, data }) {
	to.emit(type, {
		status,
		data
	});
}
