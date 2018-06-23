import { createStore } from 'redux';

import reducer from '../reducers';
import contacts from '../../public/users';

const store = createStore(reducer, { contacts });

export default store;
