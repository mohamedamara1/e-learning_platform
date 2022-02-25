
const { Client } = require("pg");
require('dotenv').config();

const client = new Client({
    connectionString: process.env.DB_CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
});

module.exports = client;