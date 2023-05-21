const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 8080, // Menggunakan PORT yang disediakan oleh App Engine atau port default 8080 jika tidak ada
    host: '0.0.0.0' // Menggunakan host 0.0.0.0 agar server dapat menerima koneksi dari luar
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
