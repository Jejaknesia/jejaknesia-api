const routes = [
  {
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      return 'Homepage';
    }
  }
]

module.exports = routes;