const koa = require('koa'),
      compress = require('koa-compress'),
      route = require('koa-route'),
      mount = require('koa-mount'),
      static = require('koa-static'),
      sysInfo = require('./utils/sys-info'),
      env = process.env;

const app = koa();

app.use(route.get('/health', health));
app.use(route.get('/info/(.*)', info));
app.use(mount('/', static('dist', { defer: true })));

app.use(function *(next) {
  if (this.url.indexOf('.') === -1) {
    this.url = '/index.html';
    this.set('Cache-Control', 'no-cache, no-store');
  }

  yield next;
});

app.use(compress());

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
