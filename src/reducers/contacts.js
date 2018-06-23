import users from '../../public/users';

const contacts = new Map(users.map(user => [user.userId, user]));

export default (state = contacts, action) => {
	return state;
};
