var Router = require('express').Router();
var controller = require('./controller');

var terminal = controller.terminal;
Router.get('/terminal',terminal.render);



module.exports = Router;