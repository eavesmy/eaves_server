var program = require('./program');

var codeList = Object.keys(program);

var Dw = function(_code) {
    this.str = _code;
};

Dw.prototype.splitCode = function() {
    this._arr = this.str.split(" ");

    this._input = {
        code: this._arr.splice(0, 1)[0],
        parma: this._arr
    };

    this.str = null;
    this._arr = null;

    return this._input;
};

Dw.prototype.inputCheck = function() {
    var t = typeof this.str;

    if (t !== 'string') return false;

    var _input = this.splitCode();

    return codeList.indexOf(_input.code) > -1;
};

Dw.prototype.argsHook = function() {
    var arrFunc = [];

    var len = this._input.parma.length;

    for (var i = 0; i < len; i++) {

        var opt = this._input.parma[i];
        var handler = this.handler.args[opt];

        if (!!handler) arrFunc.push(handler);
    }

    return arrFunc;
};


window.addEventListener("keypress", (e) => {
    var _result = e.charCode === 13;

    (function() {
        //if(e.charCode === 95){}
    })();

    if (!_result) return;

    var _code = document.getElementById("userInput").value;

    var dw = new Dw(_code);

    if (!dw.inputCheck()) return;

    dw.handler = program[dw._input.code];
    var targetDomName = dw.handler.plugin;

    var targetDom = document.getElementById(targetDomName);

    var args = dw._input.parma;

    if (!args.length) return dw.handler.default(targetDom);

    var funcLine = dw.argsHook();

    funcLine.forEach(function(opt) {
        opt(targetDom);
    });

});