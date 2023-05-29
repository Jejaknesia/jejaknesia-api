const connection = require('../utils/db');

const getAllRecordsHandler = async (request, h) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM records', (error, results, fields) => {
      if (error) {
        console.error(error);
        reject(error);
      }

      const response = h.response({
        status: 'success',
        data: results
      }).code(200);

      // const response = h.response({
      //   status: 'success',
      //   data: results
      // }).code(200);

      resolve(response);
    });
  });
};

module.exports = { getAllRecordsHandler };
