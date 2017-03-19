global.config = require('./config');
global.keyPool = [];

var netMgr = require('./netMgr');
var program = require('./program');

var hiddenPlugin = function() {
  let arr_dom = document.getElementsByClassName("plugin");
  let len = arr_dom.length;

  for (let i = 0; i < len; i++) {
    let dom = arr_dom[i];
    let _id = dom.getAttribute("id");

    if (_id.indexOf("home") > -1) continue;

    dom.style.display = "none";
  }
};

var loadHome = function() {
  var pages = netMgr.post(config.path.home.getMain);
	
  if (pages.err) return pagres.err.then(function(err) {
    throw new Error(err);
  });

  pages.success.then(function(res) {
    res.text()
      .then(function(articles) {
		
		console.log(articles)
        /*articles = JSON.parse(articles);

        articles.forEach(function(_article) {

          program.home.render(_article);

        });*/

      });
  });
};

var app = function() {
  console.log("APP START & test");

  hiddenPlugin();
  loadHome();
};

app();
