require('dotenv').config();
const { Pool } = require('pg');
const { DB_URL, NODE_ENV } = process.env;
const option = {
    connectionString: DB_URL,
    ssl: true,
}

const connection = new Pool(option);

module.exports = connection;

