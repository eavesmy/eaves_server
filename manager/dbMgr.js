var nano = require('nano')('http://localhost:5984');
var containMgr = require('./containMgr');

var dbData = function(db, type, body,cb) {

  this.dbName = db;
  this.db;
  this.type = type;
  this.body = body;
  this.cb = cb;
};

dbData.prototype.switch = function(cb) {

  switch (this.type) {
    case "insert":
      this.insert(cb);
      break;
    case "view":
      this.view(cb);
  }

};

dbData.prototype.insert = function(cb) {
  
  this.db.insert(this.body, cb);

};

dbData.prototype.delete = function() {

};

dbData.prototype.view = function(cb){
  var that = this;

  that.db.view(this.body.designName,this.body.viewName,function(err,body){
    cb(null,body);

    if(that.cb) that.cb(body);
    
  });
};


var dbMgr = module.exports = {

  _dbs: ["article"],

  _list: [],

  insert: function(db, type, body,cb) {
    var data = new dbData(db, type, body,cb);

    if(!this.checkList(data)) return;

    this._list.push(data);
  },

  checkList:function(data){
    var i = 0,len = this._list.length,opt,condition;


    for(;i<len;i++){
      
      opt = this._list[0];

      condition = opt.type === data.type && opt.db === data.db && opt.body === data.body && opt.cb === data.cb;

      if(condition) return false;
    }

    return true;
  },
  loadDB: function(dbName) {
    if (typeof dbName !== "string") return console.trace("DB name must be string");
    var exists = this._dbs.indexOf(dbName) > -1;

    if (!exists) return console.trace("Not exists this db ->", dbName);

    return nano.use(dbName);
  },

  handler: function() {
    var that = this;
    var len = that._list.length;
    if (!len) return;

    var _data = that._list[0];

    if (!_data) {
      that._list.splice(0, 1);
      return;
    }

  _data.db = that.loadDB(_data.dbName);

    _data.switch(function(err, body) {

      if (err) throw new Error(err);

      if (!!body) {
        //console.log("check db view list -> ",body);
        that._list.splice(0, 1);
      }
    });
  }
};