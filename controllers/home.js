var _privite = {
	status:1,
	name:'editor',
	url:'/editor'
}

exports.render = function(req,res,next){
	res.render('home',{
		_public:{
			title:'Eaves'
		},
		_privite:_privite
	});
}
exports.personal = function(req,res,next){
	res.render('personal',{
		_public:{
			title:'Hi,'+'This is account name'
		},
		_privite:_privite
	});
}