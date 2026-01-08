const http = require('http');
http.createServer((req, res) => {
  res.end("CI/CD with Jenkins & Docker");
}).listen(3000);
