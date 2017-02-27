var dbMgr = require('./manager/dbMgr');
var containMgr = require('./manager/containMgr');

const loop=module.exports = function(){

	dbMgr.handler();
	
	containMgr.checkDefaultList();

	setTimeout(loop,200);
};