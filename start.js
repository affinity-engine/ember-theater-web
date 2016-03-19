"use strict";

const cluster = require('cluster'),
      fs = require('fs'),
      walk = require('walk'),
      zlib = require('zlib'),
      stopSignals = [
        'SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
        'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
      ],
      production = process.env.NODE_ENV == 'production';

let stopping = false;

const walker = walk.walk('./dist');

walker.on("file", function (root, fileStats, next) {
  fs.readFile(`${root}/${fileStats.name}`, function (err, data) {
    if (err) return console.log(`Failed to find ${root}/${fileStats.name}`);
    if (fileStats.name.indexOf('.gz') >= 0) return;

    zlib.gzip(data, function(err, gzippedFile) {
      if (err) return console.log(`Failed to gzip ${fileStats.name}`);

      fs.writeFile(`${root}/${fileStats.name}.gz`, gzippedFile, function(err) {
        if (err) {
          console.log(`Failed to write ${root}/${fileStats.name}.gz`);
        } else {
          console.log(`Successfully wrote ${root}/${fileStats.name}.gz`);
        }
      });
    });

    next();
  });
});

walker.on("errors", function (root, nodeStatsArray, next) {
  next();
});

walker.on("end", function () {
  console.log('completed gzip');
});

cluster.on('disconnect', function(worker) {
  if (production) {
    if (!stopping) {
      cluster.fork();
    }
  } else {
    process.exit(1);
  }
});

if (cluster.isMaster) {
  const workerCount = process.env.NODE_CLUSTER_WORKERS || 4;
  console.log(`Starting ${workerCount} workers...`);
  for (let i = 0; i < workerCount; i++) {
    cluster.fork();
  }
  if (production) {
    stopSignals.forEach(function (signal) {
      process.on(signal, function () {
        console.log(`Got ${signal}, stopping workers...`);
        stopping = true;
        cluster.disconnect(function () {
          console.log('All workers stopped, exiting.');
          process.exit(0);
        });
      });
    });
  }
} else {
  require('./.openshift/app.js');
}
