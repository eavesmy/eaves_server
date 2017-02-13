const Animate = require('velocity-animate');

const obj_method = {
  left: "100vw",
  top: "100vh"
};

const arr_methodNames = Object.keys(obj_method);

const int_methodNamesLength = arr_methodNames.length;

const unmountPlugin = function() {
  let arr_dom = document.getElementsByClassName("plugin");
  let len = arr_dom.length;

  for (let i = 0; i < len; i++) {
    let dom = arr_dom[i];

    if(dom.style.display && dom.style.display !== "none") {
    	dom.style.display = "none";
    }
  }
};

module.exports = function(dom) {
  let i = parseInt(Math.random() * int_methodNamesLength);

  let direction = arr_methodNames[i];
  let distance = obj_method[direction];

  let firstAnimate = {};
  firstAnimate[direction] = distance;

  let secondAnimate = {};
  secondAnimate[direction] = 0;

  let displayBlock = {
    display: "block"
  };

  Animate(dom, firstAnimate,unmountPlugin);

  Animate(dom, secondAnimate, displayBlock);

};