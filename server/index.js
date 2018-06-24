const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const config = require('./config');

io.on('connection', socket => console.log('a user connected'));

app.use('*', (req, res, next) => {
	if (req.originalUrl.indexOf('socket.io/') === -1) {
		proxy(`${config.HOST}:${config.PROXY_PORT}`, {
			proxyReqPathResolver: req => req.originalUrl
		})(req, res, next);
	}
});

// app.get('*', req => {
// console.log(`client-ip: ${req.ip}, request-url: ${req.url}`);
// });

http.listen(config.PORT, config.HOST, () =>
	console.log(`Listening on port ${config.PORT}...`)
);
