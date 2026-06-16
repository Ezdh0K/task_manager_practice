const { Pool } = require('pg');
require('dotenv').config();

console.log("DB PASSWORD TYPE:", typeof process.env.DB_PASSWORD);
console.log("DB PASSWORD VALUE:", process.env.DB_PASSWORD);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD || ''),
    port: process.env.DB_PORT,
});

module.exports = pool;