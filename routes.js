var routes = module.exports = function(Router){

	Router.get("/",function(ctx,next){
		console.log(arguments);
		ctx.body = "hello world";
	});

	//Router.post("/")
};