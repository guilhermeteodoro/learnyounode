const fs = require('fs');
const map = require('through2-map');

const toQueryObject = function (queryString) {
  return queryString
    .split('&')
    .reduce((acc, pair) => {
      [key, value] = pair.split('=');
      acc[key] = value;

      return acc;
    }, {});
}

const ApiController = {
  '/api/parsetime': function (queryObject) {
    const date = new Date(queryObject['iso']);

    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
  },
  '/api/unixtime': function (queryObject) {
    const date = new Date(queryObject['iso']);

    return {
      unixtime: date.getTime()
    }
  }
}

const http = require('http');
const server = http.createServer(function(req, res) {
  if (req.method !== 'GET') {
    return res.end();
  }

  [url, queryString] = req.url.split('?');
  const queryObject = toQueryObject(queryString);

  const route = ApiController[url];

  if (route) {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    const response = JSON.stringify(
      route(queryObject)
    );

    res.end(response);
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2];
server.listen(port);
