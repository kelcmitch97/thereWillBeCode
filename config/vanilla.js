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
      database: 'pick_up_sports'
    },
    console.log('Connected to pick_up_sports database')
  );

module.exports = db;