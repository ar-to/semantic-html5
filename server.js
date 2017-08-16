const http = require('http'),
  fs = require('fs'),
  port = process.env.PORT | 3000,
  server = http.createServer();

server.listen(port);
console.log(`Listening on port : ${port}`);

server.on('request', function(req, res) {
  const headers = {
    'Content-Type': 'text/html'
  }

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, headers);

    fs.readFile('./www/index.html', function(err,data) {
      if (err) throw err;
      res.write(data);
      res.end();
    });
    return;
  } else {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
});
