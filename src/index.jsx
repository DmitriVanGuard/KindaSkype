import React from 'react';
import ReactDOM from 'react-dom';
// import io from 'socket.io-client';

import App from './App';

import store from './store';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import fancyLog from './utils/log';

const render = () => {
	fancyLog();
	ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
// registerServiceWorker();

// eslint-disable-next-line
// const socket = io();
