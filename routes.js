var fs = require('fs');
var mainPage = fs.readFileSync(__dirname + "/views/main.html").toString();

var veri = require('./handler/veri');

var home = require('./handler/home');
var blog = require('./handler/blog');

var routes = module.exports = function(Router) {

    Router.get("/", function(ctx, next) {
        ctx.body = mainPage;
    });

    Router.post("/home",home.show);

    Router.post("/blog/publish", veri.purview, blog.save);

    //Router.post("/")
};