const fetch = async (collection) => {
    // const options = {projection: { _id: 0 }};
    const result = await collection.find(query = {});
    return result.toArray();
}

module.exports = fetch;