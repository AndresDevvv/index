const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/">
      <input type="text" name="url" placeholder="Enter URL">
      <button type="submit">Go</button>
    </form>
  `);
});

app.post('/', (req, res) => {
  const url = req.body.url;
  request(url, (error, response, body) => {
    if (error) {
      res.send(`An error occurred: ${error}`);
    } else {
      res.send(body);
    }
  });
});

app.listen(port, () => {
  console.log(`Web proxy listening at http://localhost:${port}`);
});
