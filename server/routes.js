var Router = module.exports = require('express').Router();

var handler = require('../handler');

var home = handler.home;
Router.get('/', home.render);

var center = handler.center;
Router.get('/center',center.render);

var article = handler.article;
Router.get('/article',article.render);
Router.post('/article/save',article.save);
Router.post('/article/push',article.push);
Router.post('/article/delete',article.delete);