var nano = require('nano')('http://localhost:5984');

var dbData = function(db,type,body){
	this.db = db;
	this.type = type;
	this.body = body;
};

dbData.prototype.insert = function(db,cb){
	db.insert(this.body,cb);
};

dbData.prototype.delete = function(){};


var dbMgr = module.exports = {

  _dbs: ["article"],

  _list: [],

  insert:function(db,type,body){
  	var data = new dbData(arguments);

  	
  	
  },

  loadDB: function(dbName) {
    if (typeof dbName !== "string") return console.trace("DB name must be string");
    var exists = this._dbs.indexOf(dbName) > -1;

    if (!exists) return console.trace("Not exists this db ->", dbName);

    this._db = nano.use(dbName);
  },


  check: function() {
    var len = this._list.length;
    if (!len) return;


  }
};