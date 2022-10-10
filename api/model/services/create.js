const create = async (collection, document) => {
    const result = await collection.insertOne(document);
    return result;
}

module.exports = create;