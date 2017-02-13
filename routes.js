var fs = require('fs');
var mainPage = fs.readFileSync(__dirname + "/views/main.html").toString();

var blog = require('./handler/blog');

var routes = module.exports = function(Router) {

  Router.get("/", function(ctx, next) {
    ctx.body = mainPage;
  });

  Router.post("/blog/publish", blog.save);

//Router.post("/")
};