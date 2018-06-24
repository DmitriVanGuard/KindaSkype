const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8989, () => console.log('Listening on port 8989'));

app.get('/*', req => {
	console.log(`client-ip: ${req.ip}, request-url: ${req.url}`);
});
