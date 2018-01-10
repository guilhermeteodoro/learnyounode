const fs = require('fs');
const map = require('through2-map');

const http = require('http');
const server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    req
      .pipe(map((chunck) => chunck.toString().toUpperCase()))
      .pipe(res);
  } else {
    res.end();
  }
});

const port = process.argv[2];
server.listen(port);
