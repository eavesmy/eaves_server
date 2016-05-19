var Func = require('../terminal-code-query');

var CodeOrder = function (code, query, callback) {
    code = 'help';
    query = '-a';
    var run = function () {
        return Func[code]
    };
    console.log(Func[code]);
    (Func[code] !== undefined) ? (Func) : (callback(404));
};
CodeOrder();
/*CodeOrder.help = Func.help();
 var CodePrototype = function(code,query){
 this.help = Func.help(query);
 };
 CodePrototype.prototype._list = function(code,query,callback){
 var methods_list = Object.getOwnPropertyNames(CodeOrder);
 (methods_list.indexOf(code) < 0)?(callback(404)):(this[code]/!*need cross code to get the method of CodePrototype*!/);
 };*/

module.exports = CodeOrder;