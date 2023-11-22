const http = require('http');

const requestHandler = (req, res) => {
  res.end('Hello Holberton School!');
};

const app = http.createServer()
  .addListener('request', (req, res) => requestHandler(req, res))
  .listen(1245);

module.exports = app;
