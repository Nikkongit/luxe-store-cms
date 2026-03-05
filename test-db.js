import { MongoClient } from 'mongodb';

async function testConnection() {
    const uri = "mongodb://127.0.0.1/my-store";
    const client = new MongoClient(uri);

    try {
        console.log("Attempting to connect to MongoDB...");
        await client.connect();
        console.log("Connected successfully to MongoDB!");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
    } finally {
        await client.close();
    }
}

testConnection();
