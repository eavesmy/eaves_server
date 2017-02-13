var a_db = require('../manager/dbMgr').A_db;

var blog = module.exports = {

  save: function(res,next) {
    const t = typeof res;
    if (t !== 'object') return console.trace("Argument type Error ,must be an object.");

    var receivedForm;

    console.log(res);
    /*a_db.insert(res,function(err,body){
    	if(err) throw new Error(err);

        
    });*/
  },

  delete: function() {
	
  },

  update: function() {},

  push: function() {}
};