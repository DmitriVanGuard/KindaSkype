import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers/rootReducers';
import epics from '../epics/rootEpics';

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(reducer, applyMiddleware(epicMiddleware));

export default store;
