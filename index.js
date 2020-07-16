const { Client } = require('pg');
require('dotenv').config();
 
const client = new Client({
  connectionString: process.env.DB_STRING,
  ssl: {
    rejectUnauthorized: false
  }

});
 
client.connect();
 
client.query('SELECT * FROM public."QUESTION";', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});