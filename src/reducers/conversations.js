import conversations from '../../public/conversations';

const conversationsMap = new Map(
	Object.keys(conversations).map(conversation => [
		parseInt(conversation, 10),
		conversations[conversation]
	])
);

export default (state = conversationsMap, action) => {
	return state;
};
