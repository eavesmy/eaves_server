var Router = module.exports = require('express').Router();

var hanlder = require('../handler');

var home = hanlder.home;
Router.get('/', home.render);

var terminal = hanlder.terminal;
Router.get('/terminal',terminal.render);

var article = hanlder.article;
Router.post('/article/save',article.save);
Router.post('/article/push',article.push);
Router.post('/article/delete',article.delete);