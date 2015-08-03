#!/usr/bin/env node

var path = require('path');
var locales = require('./');
var argv = process.argv;

locales(
  path.join(__dirname, argv[2]),
  path.join(__dirname, argv[3])
);
