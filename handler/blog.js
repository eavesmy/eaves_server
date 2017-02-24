var a_db = require('../manager/dbMgr').A_db;
var preTools = require('../preTools');

module.exports = {

  save: function(ctx, next) {
    let receiveData = ctx.request.fields;
    if (typeof receiveData !== 'object' || !receiveData) return console.trace("Argument type Error ,must be an object.");

    receiveData._id = preTools.Date.timeStamp();
    //receiveData.author = "";
    receiveData.tags = receiveData.tags.split(" ");

    var db_status = a_db.insert(receiveData, function(err, body) {
      if (err) throw new Error(err);

    });

    if (!!db_status.writable) ctx.status = 200;
  },

  delete: function() {

  },

  update: function() {},

  push: function() {}
};