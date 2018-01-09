const fs = require('fs');
const path = require('path');

const filter = function (dir, fileExtension, callback) {
  fs.readdir(dir, (err, data) => {
    if (err) {
      return callback(err);
    }

    list = data.filter((item) => path.extname(item) === `.${fileExtension}`);

    callback(null, list);
  });
}

module.exports = filter;
