const fs = require('fs');

const filePath = process.argv[3];

const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });

  fs.createReadStream(filePath).pipe(res);
});

const port = process.argv[2];
server.listen(port);
