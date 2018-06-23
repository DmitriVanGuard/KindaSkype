import contactsData from '../../public/contacts';

const contacts = new Map(contactsData.map(user => [user.userId, user]));

export default (state = contacts, action) => {
	return state;
};
