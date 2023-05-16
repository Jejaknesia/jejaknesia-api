const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000, // Port yang akan digunakan oleh server
    host: 'localhost' // Host yang akan digunakan oleh server
  });

  server.route(routes);

  await server.start();
  console.log('Server running on', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
