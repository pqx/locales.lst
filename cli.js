#!/usr/bin/env node

var locales = require('./');
var mkdirp = require('mkdirp');
var argv = process.argv;

var lst = argv[2];
var dir = argv[3] || 'locales';

mkdirp(dir, function() {
  locales(lst, dir);
});
