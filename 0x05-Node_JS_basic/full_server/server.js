const server = require('express')();

const router = require('./routes/index');

server.use(router);

server.listen(1245, () => console.log('app listening on port 1245'));

module.exports = server;
