const mysql = require('mysql2'); // Import the mysql2 package
require('dotenv').config();
// Create a connection to the database
const db = mysql.createConnection({
  host: 'localhost',  // Your MySQL host (localhost)
  user: 'root',       // Your MySQL user (root)
  password: '', // Your MySQL password (replace with the correct password)
  database: 'dbcrud'  // Your MySQL database (dbcrud)
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to MySQL database: dbcrud');
});

// Export the database connection for use in other files
module.exports = db;
