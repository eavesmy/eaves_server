var nano = require('nano')('http://localhost:5984');
var article = nano.use("article");

var dbMgr = module.exports = {
	
	A_db : article
};