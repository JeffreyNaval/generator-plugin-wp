'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var fs = require('fs-extra');

describe('plugin-wp:cpt', function () {
  before(function (done) {
    helpers.run(path.join( __dirname, '../cpt'))
      .inTmpDir( function (dir) {
        fs.copySync(path.join(__dirname, './test-assets/subgenerator-test-plugin'), dir);
      })
      .withOptions({ 'skip-install': true })
      .withArguments('new-cpt', '--force')
      .withLocalConfig({
        "name": "Subgenerator Test",
        "homepage": "http://webdevstudios.com",
        "description": "A radical new plugin for WordPress!",
        "version": "0.1.0",
        "author": "WebDevStudios",
        "authoremail": "contact@webdevstudios.com",
        "authorurl": "http://webdevstudios.com",
        "license": "GPLv2",
        "slug": "subgenerator-test",
        "classname": "Subgenerator_Test",
        "prefix": "subgenerator_test",
        "year": 2015
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'includes/new-cpt.php'
    ]);
  });
});
