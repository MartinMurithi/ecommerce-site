require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.User,
  host: process.env.Host,
  database: process.env.Database,
  password: process.env.Password,
  port: process.env.DB_PORT,
});

module.exports = pool;
