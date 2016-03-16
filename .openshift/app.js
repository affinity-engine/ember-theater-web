const http         = require('http'),
      fs           = require('fs'),
      path         = require('path'),
      mime         = require('mime-types'),
      sysInfo      = require('./utils/sys-info'),
      env          = process.env;

let server = http.createServer(function (req, res) {
  let url = req.url;

  // IMPORTANT: Your application HAS to respond to GET /health with status 200
  //            for OpenShift health monitoring

  if (url == '/health') {
    res.writeHead(200);
    res.end();
  } else if (url.indexOf('/info/') == 0) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, no-store');
    res.end(JSON.stringify(sysInfo[url.slice(6)]()));
  } else {
    if (url.indexOf('.') === -1) {
      url = '/index.html';
    }
console.log(url)
    fs.readFile('./dist' + url, function (err, data) {
      if (err) {
        console.log(err)
        res.writeHead(404);
        res.end();
      } else {
        const mimeType = mime.lookup(url);
          console.log(mimeType)

        res.setHeader('Content-Type', mimeType);
        if (mimeType === 'text/html') {
          res.setHeader('Cache-Control', 'no-cache, no-store');
        }
        res.end(data);
      }
    });
  }
});

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
