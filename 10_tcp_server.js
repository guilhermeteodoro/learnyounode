const strftime = require('strftime');
const net = require('net');

const server = net.createServer(function (socket) {
  const date = strftime('%Y-%m-%d %H:%M', new Date());
  socket.end(`${date}\n`);
});

const port = process.argv[2];

server.listen(port);
