var colors = require('colors');

var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static-server');

var app = new Koa();

var Router = new Router();
var routes = require('./routes')(Router);

app
  .use(Router.routes())
  .use(serve({rootDir: __dirname, index: "/views/main.html"}));


app.listen("8080", function() {
  console.log("=======================================".green);
  console.log("       Server start on port 8080 ".green);
  console.log("=======================================".green);
});