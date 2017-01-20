var a_db = require('../manager/dbMgr').A_db;

var blog = module.exports = {


  save: function(article,res) {
    const t = typeof article;
    if (t !== 'object') return console.trace("Argument type Error ,must be an object.");
    
    a_db.insert(t,function(err,body){
    	if(err) throw new Error(err);
    	
    	console.log(body);	
    });
  },

  delete: function() {

  },

  update: function() {},

  push: function() {}
};