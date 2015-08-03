var fs = require('fs');
var test = require('tape');
var locales = require('../');

function jsonFile(f) {
  var str = fs.readFileSync(f);
  return JSON.parse(str);
}

test('samples.lst', function(t) {
  t.plan(2);
  
  locales('./test/sample.lst', './test/locales');

  setTimeout(function() {
    t.deepEqual(jsonFile('./test/locales/en.json'), {
      hello: 'Hello',
      world: 'World'
    });

    t.deepEqual(jsonFile('./test/locales/zh.json'), {
      hello: '你好',
      world: '世界'
    });
  }, 400);
});
