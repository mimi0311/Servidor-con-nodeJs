const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const response = JSON.stringify({ name: 'Tu Nombre', message: 'Mensaje en JSON' });
  res.end(response);
});

server.listen(port, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${port}`));
});
