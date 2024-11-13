//DATABASE CONNECTION TO THE SQL CALLED submit_contacts.js

const mysql = require('mysql');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Parse the body of the request (form data)
  const { name, email, message } = JSON.parse(event.body);

  // MySQL connection setup
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contacts_db",
  });

  // Establish connection and insert data : displays two fo these options
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";
    
    connection.query(query, [name, email, message], (error, results) => {
      if (error) {
        connection.end();
        reject({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to insert data" }),
        });

      } else {
        connection.end();
        resolve({
          statusCode: 200,
          body: JSON.stringify({ success: true }),
        });
      }
    });
  });
};
