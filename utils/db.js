const mysql = require('mysql');

// Konfigurasi koneksi ke database Cloud SQL
const connection = mysql.createConnection({
  host: '34.128.72.212', // IP eksternal Cloud SQL
  user: 'root',
  password: '202051056',
  database: 'money-dicoding'
});

// Membuka koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to Cloud SQL:', err);
    return;
  }
  console.log('Connected to Cloud SQL');
});

// Contoh permintaan GET
// const queryString = 'SELECT * FROM records';

// connection.query(queryString, (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }
//   console.log('Results:', results);
// });

// Menutup koneksi setelah selesai
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing connection:', err);
//     return;
//   }
//   console.log('Connection closed');
// });

module.exports = connection;