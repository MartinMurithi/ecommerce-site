require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: 
  "postgres",
  host: "localhost",
  database: "ecommerce",
  password: process.env.Password,
  port: process.env.DB_PORT,
});

module.exports = pool;
