const http = require("http");
const request = require("request");
const Url = require("url");

http.createServer((req, res) => {
  try {
    const query = Url.parse(req.url, true).query;
    const source = atob(query.source);
    
    console.log("source", source);

    req.pipe(request(source)).pipe(res);

  } catch (error) {
    console.error('Error:', error.message);
  }
}).listen(8080);
