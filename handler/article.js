var nano = require('nano');


var article = module.exports = {};

article.render = function(req,res){
	res.render('article');
};

article.save = function(req,res){
	console.log(req.body)
};

article.push = function(req,res){

};

article.delete = function(req,res){

};