#!/usr/bin/env node

var locales = require('./');
var argv = process.argv;
locales(argv[2], argv[3]);
