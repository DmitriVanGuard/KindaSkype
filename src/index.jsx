import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import fancyLog from './utils/log';

import App from './App';

import './index.css';

const render = () => {
	fancyLog();
	ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
