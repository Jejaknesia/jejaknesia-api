const { getAllRecordsHandler, registerHandler, loginHandler } = require('./handler');

const routes = [
  {
    path: '/',
    method: 'GET',
    handler: getAllRecordsHandler
  },
  {
    path: '/register',
    method: 'POST',
    handler: registerHandler
  },
  {
    path: '/login',
    method: 'POST',
    handler: loginHandler
  }
]

module.exports = routes;