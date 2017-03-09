var Animate = require('velocity-animate');

var obj_method = {
  left: "100vw",
  top: "100vh"
};

var arr_methodNames = Object.keys(obj_method);

var int_methodNamesLength = arr_methodNames.length;

var unmountPlugin = function() {
  var arr_dom = document.getElementsByClassName("plugin");
  var len = arr_dom.length;

  for (var i = 0; i < len; i++) {
    var dom = arr_dom[i];

    if(dom.style.display && dom.style.display !== "none") {
    	dom.style.display = "none";
    }
  }
};

module.exports = function(dom) {
  var i = parseInt(Math.random() * int_methodNamesLength);

  var direction = arr_methodNames[i];
  var distance = obj_method[direction];

  var firstAnimate = {};
  firstAnimate[direction] = distance;

  var secondAnimate = {};
  secondAnimate[direction] = 0;

  var displayBlock = {
    display: "block"
  };

  Animate(dom, firstAnimate,unmountPlugin);

  Animate(dom, secondAnimate, displayBlock);

};