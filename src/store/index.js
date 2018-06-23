import { createStore } from 'redux';

import reducer from '../reducers';
// import users from '../../public/users';

// const contacts = new Map(users.map(user => [user.userId, user]));

// const store = createStore(reducer, { contacts }); // initialState is often used for SSR
const store = createStore(reducer);

export default store;
