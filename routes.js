var Router = require('express').Router();
var controller = require('./controller');

var terminal = controller.terminal;
Router.get('/terminal',terminal.render);
Router.post('/terminal',terminal.code);



module.exports = Router;