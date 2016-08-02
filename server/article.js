var tools = require('../tools');
var db = require('nano');

var article = module.exports = function(o){
	this.content = o.main;
	this.editor = o.editor;
	this.time = tools.time;
}
article.prototype.save = function(){
	
}