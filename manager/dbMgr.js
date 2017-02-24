var nano = require('nano')('http://localhost:5984');
var article = nano.use("article");

var dbMgr = module.exports = {
	_list : [],
	
	_db:article,

	insert:function(body){

	},

	loop:function(){
		
	}
};