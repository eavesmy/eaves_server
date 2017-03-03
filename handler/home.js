var containMgr = require('../manager/containMgr');

module.exports = {
	show:function(ctx,next){
		
		var defaultList = Object.keys(containMgr._list);
		var sendList = [];

		defaultList.forEach(function(opt){
			if(!!opt) sendList.push(containMgr._list[opt]);
		});

		ctx.status = 200;
		ctx.body = JSON.stringify(sendList);
	}
};