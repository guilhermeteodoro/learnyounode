const fs = require('fs');
const filePath = process.argv[2];

// const buffer = fs.readFileSync(filePath, 'utf8');
// const str = buffer.toString();
const str = fs.readFileSync(filePath, 'utf8');

console.log(str.split("\n").length - 1);
