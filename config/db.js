const { MongoClient } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectDB() {
  if (db) return db;
  try {
    await client.connect();
    db = client.db(); // default DB from URI
    console.log('Connected to MongoDB');
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
}

module.exports = { connectDB };