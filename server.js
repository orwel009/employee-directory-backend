const { connectDB } = require('./config/db');
require('dotenv').config();

async function startServer() {
  const db = await connectDB();
}

startServer();