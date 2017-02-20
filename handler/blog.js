var a_db = require('../manager/dbMgr').A_db;
var preTools = require('../preTools');

module.exports = {

  save: function(ctx,next) {
    let receiveData = ctx.request.fields;
    if (typeof receiveData !== 'object' ||!receiveData ) return console.trace("Argument type Error ,must be an object.");

    receiveData._id = preTools.Date.timeStamp();
    //receiveData.author = "";
    receiveData.tags = receiveData.tags.split(" ");

    //console.log("Check article ->",receiveData);
    ctx.status = 200;
    ctx.body = "aaa";

    a_db.insert(receiveData,function(err,body){
    	if(err) throw new Error(err);

      //ctx.status = 200;

    });

    console.log(a)
  },

  delete: function() {
	
  },

  update: function() {},

  push: function() {}
};