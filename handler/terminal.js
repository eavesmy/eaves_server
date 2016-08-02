var terminal = module.exports = {};

terminal.render = function(req,res){
	res.render('terminal',{
		_privite:{
			name:'eaves'
		}
	});
}