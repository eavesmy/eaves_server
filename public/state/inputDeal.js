const program = require('./program');

const codeList = Object.keys(program);

class Dw {
  constructor(_code) {
    this.str = _code;
  }

  splitCode() {
    this._arr = this.str.split(" ");

    this._input = {
      code: this._arr.splice(0, 1)[0],
      parma: this._arr
    };

    this.str = null;
    this._arr = null;

    return this._input;
  }

  inputCheck() {
    let t = typeof this.str;

    if (t !== 'string') return false;

    let _input = this.splitCode();

    return codeList.indexOf(_input.code) > -1;
  }

  argsHook() {
    var arrFunc = [];

    let len = this._input.parma.length;
    
    for (let i = 0; i < len; i++) {

      let opt = this._input.parma[i];
      let handler = this.handler.args[opt];

      if (!!handler) arrFunc.push(handler);
    }

    return arrFunc;
  }

}


window.addEventListener("keypress", (e) => {
  let _result = e.charCode === 13;

  if (!_result) return;

  let _code = document.getElementById("userInput").value;

  let dw = new Dw(_code);

  if (!dw.inputCheck()) return;

  dw.handler = program[dw._input.code];
  let targetDomName = dw.handler.plugin;

  var targetDom = document.getElementById(targetDomName);

  let args = dw._input.parma;

  if (!args.length) return dw.handler.default(targetDom);

  let funcLine = dw.argsHook();

  funcLine.forEach(function(opt){
    opt(targetDom);
  });

});