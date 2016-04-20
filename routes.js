var Router = require('express').Router(),
	controller = require('./controllers');

var home = controller.home;
Router.get('/',home.render)
Router.get('/:id',home.personal)

module.exports = Router;