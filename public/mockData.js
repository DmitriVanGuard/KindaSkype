const faker = require('faker');
const txtgen = require('txtgen');
const fs = require('fs');

let currentId = 0;

const generateUser = () => ({
	name: faker.name.findName(),
	email: faker.internet.email(),
	profilePic: faker.internet.avatar(),
	status: txtgen.sentence(),
	contactId: currentId++
});

const generateUsers = numberOfUsers => {
	const users = [];

	for (let i = 0; i < numberOfUsers; i++) {
		const generatedUser = generateUser();
		users.push(generatedUser);
	}

	return users;
};

const generateMsg = number => ({
	number,
	text: txtgen.sentence(),
	isClientMsg: faker.random.boolean()
});

const generateMsgs = numberOfMsgs => {
	const msg = [];

	for (let i = 0; i < numberOfMsgs; i++) {
		const generatedMsg = generateMsg(i);
		msg.push(generatedMsg);
	}

	return msg;
};

const generateConversations = contacts => {
	const conversations = {};

	contacts.forEach(
		contact => (conversations[contact.contactId] = generateMsgs(10))
	);

	return conversations;
};

const client = generateUser();
const contacts = generateUsers(10);
const conversations = generateConversations(contacts);

fs.writeFileSync('./public/client.json', JSON.stringify(client));
fs.writeFileSync('./public/contacts.json', JSON.stringify(contacts));
fs.writeFileSync('./public/conversations.json', JSON.stringify(conversations));
