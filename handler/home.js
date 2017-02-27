var containMgr = require('../manager/containMgr');

module.exports = {
	show:function(ctx,next){
		
		var defaultList = containMgr._list;

		ctx.status = 200;
		ctx.body = JSON.stringify(defaultList);
	}
};