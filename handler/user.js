module.exports = {
	signIn:(ctx,next)=>{
		const receiveData = ctx.request.fields;
		if(!receiveData || typeof receiveData !== "object") return console.trace("Argument type Error ,must be an object.");

		const userInfo = {
			account:receiveData.account,
			passwd:receiveData.passwd
		};

		console.log("Receive signIn info ->",userInfo);
	},
	signUp:(ctx,next)=>{

	}
};