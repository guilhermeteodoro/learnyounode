const filter = require('./filter');

filter(process.argv[2], process.argv[3], (err, list) => {
  if (err) {
    console.error(`There was an error: ${err}`)
  }

  console.log(list.join('\n'))
});
