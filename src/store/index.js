import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers/rootReducers';
import epics from '../epics/rootEpics';
// import users from '../../public/users';

// const contacts = new Map(users.map(user => [user.userId, user]));

const epicMiddleware = createEpicMiddleware(epics);

// const store = createStore(reducer, { contacts }); // initialState is often used for SSR
// console.log(epicMiddleware, epics);
const store = createStore(reducer, applyMiddleware(epicMiddleware));

// epicMiddleware.run(epics);

export default store;
