require('dotenv').config()

const UserName = process.env.MONGO_DB_USERNAME;
const Password = process.env.MONGO_DB_PASSWORD;
const ClusterURI = process.env.MONGO_DB_CLUSTER_URI;

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  `mongodb+srv://${UserName}:${Password}@${ClusterURI}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;