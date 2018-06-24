import contacts from '../../public/contacts';
import objectsToMapByKey from '../utils';

// const contactsMap = new Map(contacts.map(user => [user.userId, user]));
const contactsMap = objectsToMapByKey(contacts, 'userId');

export default (state = contactsMap, action) => {
	// console.log(action);
	switch (action.type) {
		default:
			return state;
	}
};
