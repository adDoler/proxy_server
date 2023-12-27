const request = require("request");
const Url = require("url");
const express = require('express');

const app = express();
const port = 4000;

app.use((req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    next();
});
app.get('/', (req, res) => {
  try {
    const query = Url.parse(req.url, true).query;
    const source = atob(query.source);
    
    console.log("source", source);

    req.pipe(request(source)).pipe(res);

  } catch (error) {
    console.error('Error:', error.message);
  }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});