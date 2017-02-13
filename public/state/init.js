(function() {
  let arr_dom = document.getElementsByClassName("plugin");
  let len = arr_dom.length;

  for (let i = 0; i < len; i++) {
    let dom = arr_dom[i];
    dom.style.display = "none";
  }
})();