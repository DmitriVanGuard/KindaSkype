import contacts from '../../public/contacts';

const contactsMap = new Map(contacts.map(user => [user.userId, user]));

export default (state = contactsMap) => state;
