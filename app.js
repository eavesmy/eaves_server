var colors = require('colors');

var BodyParse = require('koa-better-body');
var Router = require('koa-router');
var StaticServe = require('koa-static-server');
var Koa = require('koa');

var app = new Koa();

var Router = new Router();
var routes = require('./routes')(Router);
var loop = require('./loop')();

app.keys = "testCookiesKey";

app
  .use(BodyParse())
  .use(Router.routes())
  .use(StaticServe({
    rootDir: __dirname,
    index: "/views/main.html"
  }));


app.listen("8080", function() {
  console.log("=======================================".green);
  console.log("       Server start on port 8080 ".green);
  console.log("=======================================".green);
});