const { getAllRecordsHandler } = require('./handler');

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: getAllRecordsHandler
  }
]

module.exports = routes;