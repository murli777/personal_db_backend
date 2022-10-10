const create = require("./services/create");
const fetch = require("./services/fetch")
const client = require("./mongoClient");
const collection = client.db("ProjectCompass").collection("test_collection");

const mongoConnect = async () => {
	try {
		await client.connect();
		console.log("connected to DB");
	} catch (error) {
		return error;
	}
};

mongoConnect().catch(() => console.error(error));

const createRecord = async (document) => {
	const result = await create(collection, document);
	return result;
};
const fetchData = async () => {
	const result = await fetch(collection);
	return result;
};

module.exports = {
	fetchData,
	createRecord,
	// updateNote,
	// deleteNote,
};