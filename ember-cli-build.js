/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');
var jsStringEscape = require('js-string-escape');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    stringifyPath: 'markdown',
    babel: {
      includePolyfill: true,
      stage: 1
    },

    'ember-cli-qunit': {
      useLintTree: false
    },

    // eslint: {
    //   testGenerator: eslintTestGenerator
    // }
  });

  /* eslintTestGenerator */
  function render(errors) {
    if (!errors) { return ''; }
    return errors.map(function(error) {
      return error.line + ':' + error.column + ' ' +
        ' - ' + error.message + ' (' + error.ruleId +')';
    }).join('\n');
  }

  // Qunit test generator
  function eslintTestGenerator(relativePath, errors) {
    var pass = !errors || errors.length === 0;
    return "import { module, test } from 'qunit';\n" +
      "module('ESLint - " + path.dirname(relativePath) + "');\n" +
      "test('" + relativePath + " should pass ESLint', function(assert) {\n" +
      "  assert.ok(" + pass + ", '" + relativePath + " should pass ESLint." +
      jsStringEscape("\n" + render(errors)) + "');\n" +
      "});\n";
  }

  app.import('bower_components/showdown/dist/showdown.min.js');

  return app.toTree();
};
