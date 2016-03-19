const koa = require('koa'),
      compressible = require('compressible'),
      fs = require('fs'),
      route = require('koa-route'),
      mime = require('mime'),
      mount = require('koa-mount'),
      koaStatic = require('koa-static'),
      sysInfo = require('./utils/sys-info'),
      env = process.env;

const app = koa();

app.use(route.get('/health', health));
app.use(route.get('/info/(.*)', info));

app.use(function *(next) {
  yield next;

  if (this.isIndex) {
    this.set('Cache-Control', 'public, no-cache, no-store, max-age=0');
  } else {
    fs.stat(`./dist${this.url}`, (err, stats) => {
      this.set('Cache-Control', 'public, max-age=86400');
      this.set('ETag', stats.mtime);
    });
  }
});

app.use(mount('/', koaStatic('dist', { defer: true })));

app.use(function *(next) {
  if (this.url.indexOf('.') === -1) {
    this.url = '/index.html';
    this.isIndex = true;
  }

  this.compress = compressible(mime.lookup(this.url));

  yield next;
});

function *health() {
  this.status = 200;
}

function *info() {
  this.type = 'application/json';
  this.set('Cache-Control', 'no-cache, no-store');
  this.body = JSON.stringify(sysInfo[url.slice(6)]());
}

app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
