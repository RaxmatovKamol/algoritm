const { MongoClient,ServerApiVersion } = require('mongodb');
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${username}:${password}@algaritm.wsdjgbw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



(async () => {
    try {
        await client.connect();
        console.log("Connected to MongoDb");
    } catch (err) {
        console.log("Error connecting to MongoDb");
    }
})();

const db = client.db("Algaritm");
module.exports = db;