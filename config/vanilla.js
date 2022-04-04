// Connect to database
const mysql = require('mysql2');

const dbHostname = process.env.DB_HOSTNAME;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const db = mysql.createConnection(
    {
      host: dbHostname,
      // USE YOUR MySQL username
      user: dbUsername,
      // USE YOUR MySQL password
      password: dbPassword,
      // Database Name
      database: 'techBlog'
    },
    console.log('Connected to techBlog database')
  );

module.exports = db;