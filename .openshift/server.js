#!/bin/env node

var EmberApp = function() {
  var stop = this._stop;

  this.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
  this._app = null;
  this._cache = {};
  this.address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

  process.on('exit', function() {
    stop();
  });

  this._setupTerminationHandlers();
};

EmberApp.prototype._setupTerminationHandlers = function setupTerminationHandlers() {
  var stop = this._stop;

  ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
    'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
  ].forEach(function(element) {
    process.on(element, function() {
      stop(element);
    });
  });
};

EmberApp.prototype._stop = function stop(sig) {
  if (typeof sig === 'string') {
    console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
  }

  process.exit(1);
  console.log('%s: Node server stopped.', Date(Date.now()));
};

EmberApp.prototype._initializeCache = function initializeCache() {
  var fs = require('fs');

  this._cache['/dist/index.html'] = fs.readFileSync(__dirname + '/dist/index.html');
};

EmberApp.prototype._initializeExpressServer = function run() {
  var cache = this._cache;
  var express = require('./express');

  this._app = express();

  this._app.use('/assets', express.static(__dirname + '/dist/assets'));
  this._app.use('/ember-theater', express.static(__dirname + '/dist/ember-theater'));
  this._app.use('/fonts', express.static(__dirname + '/dist/fonts'));
  this._app.use('/theater', express.static(__dirname + '/dist/theater'));

  this._app.get('*', function (req, res) {
    if (!req.path.match(/\assets\//)) {
      res.setHeader('Content-Type', 'text/html');
      res.send(
        cache['/dist/index.html']
      );
    }
  });
};

EmberApp.prototype.run = function run() {
  var port = this.port;
  var address = this.address;

  this._initializeCache();
  this._initializeExpressServer();

  this._app.listen(port, address, function() {
    console.log('%s: Node server started on %s:%d ...', Date(Date.now()), address, port);
  });
};

var emberApp = new EmberApp();
emberApp.run();
