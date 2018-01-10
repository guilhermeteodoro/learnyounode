const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];
const extension = process.argv[3];

fs.readdir(filePath, (err, data) => {
  if (!err) {
    const list = data.filter((item) => path.extname(item) === `.${extension}`);
    console.log(list.join('\n'));
  }
});
