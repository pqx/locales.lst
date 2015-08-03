var fs = require('fs');
var path = require('path');
var through2 = require('through2');

var _first = true;
var _locales = [];
var _jsons = [];
var _index = 0;
var _term = null;


module.exports = function(lst, dir) {
  var r = fs.createReadStream(lst).pipe(through2.obj(function(chunk, enc, callback) {
    var self = this;
    chunk = chunk.toString();
    var lines = chunk.split(/\r\n|\r|\n/g);

    lines.forEach(function(line) {
      line = line.trim();
      var fc = line[0];
      if(fc === '#') return;
      if(!line) return;

      if(_first) {
        _locales = line.split(' ');
        _jsons = _locales.map(function() {return {}});
        _first = false;
      } else if(fc === '-') {
        var val = line.substr(1).trim();
        if(val) {
          self.push({
            index: _index,
            term: _term,
            val: val
          });
        }
        _index++;
      } else {
        _term = line;
        _index = 0;
      }
    });

    callback();
  }));

  r.on('data', function(data) {
    _jsons[data.index][data.term] = data.val;
  });

  r.on('end', function() {
    _locales.forEach(function(locale, i) {
      var json = _jsons[i];
      fs.writeFileSync(path.join(dir, locale + '.json'), JSON.stringify(json));
    });
  });

}
