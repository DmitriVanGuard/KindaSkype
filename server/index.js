const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => console.log('a user connected'));

app.use('*', (req, res, next) => {
	if (req.originalUrl.indexOf('socket.io/') === -1) {
		proxy('192.168.80.5:8080', {
			proxyReqPathResolver: req => req.originalUrl
		})(req, res, next);
	}
});

// app.get('*', req => {
// console.log(`client-ip: ${req.ip}, request-url: ${req.url}`);
// });

http.listen(3000, '192.168.80.5', () => console.log('Listening on port 3000'));
