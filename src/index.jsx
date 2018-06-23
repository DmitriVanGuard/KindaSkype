import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './store';
// import registerServiceWorker from './registerServiceWorker';

import './index.css';

const render = () => {
	fancyLog();
	ReactDOM.render(<App />, document.getElementById('root'));
};

render();
store.subscribe(render);
// registerServiceWorker();

/* **** */
/* HELPER FUNCTIONS */
/* **** */
function fancyLog() {
	console.log(
		`%c Rendered with -> `,
		'background: purple; color: #FFF',
		store.getState()
	);
}
