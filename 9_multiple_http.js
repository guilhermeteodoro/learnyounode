const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const messages = [];

urls.map((url, index) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }

      messages[index] = data.toString();

      if (messages.length === urls.length) {
        console.log(messages.join('\n'));
      }
    }));
  });
});
