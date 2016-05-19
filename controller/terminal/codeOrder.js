var codeOrder = module.exports = {};

var dictionary = require('./dictionary');


codeOrder.doing = function(code, query, callback) {
    codeOrder.unicode(code, query, function(result) {
        callback && callback(result);
    });
}

codeOrder.unicode = function(code, query, callback) {
    var _code = '';
    for (var i = 0; i < code.length; i++) {
        _code += code[i].charCodeAt().toString(16);
    }
    callback && callback(dictionary.dwOrder(_code, query));
}