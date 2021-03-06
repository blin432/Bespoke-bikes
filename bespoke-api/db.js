require('dotenv').config();
const pgp = require('pg-promise')({});
///connected to postgres database with a .env file
const cn = {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
};

const db = pgp(cn); // database instance;

module.exports = db;