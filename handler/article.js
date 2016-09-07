var nano = require('nano');

var article = module.exports = {};
const pages = 10;

article.render = function(req,res){
	res.render('article');
};

article.getArticle = function(req,res){
	var index = req.body.index;
}

article.save = function(req,res){
	console.log(req.body)
};

article.push = function(req,res){

};

article.delete = function(req,res){

};