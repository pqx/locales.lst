#!/usr/bin/env node

var locales = require('../');
var argv = process.argv;

console.log(argv[1], argv[2]);

locales(argv[1], argv[2]);
