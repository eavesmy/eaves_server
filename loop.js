var dbMgr = require('./manager/dbMgr');

const loop=module.exports = function(){

	dbMgr.check();
	setTimeout(loop,500);
};