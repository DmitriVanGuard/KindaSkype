const faker = require('faker');
const txtgen = require('txtgen');
const fs = require('fs');

const generateMsg = number => ({
	number,
	text: txtgen.sentence(),
	isClientMsg: faker.random.boolean()
});

const generateMsgs = numberOfMsgs => {
	// Array.from({ length: numberOfMsgs }, generateUser);
	// const users = new Map();
	const msg = [];

	for (let i = 0; i < numberOfMsgs; i++) {
		const generatedMsg = generateMsg(i);
		msg.push(generatedMsg);
	}

	return msg;
};

fs.writeFileSync('./public/messages.json', JSON.stringify(generateMsgs(10)));
