var dictionary = module.exports = {};
var orders = require('./orders');

dictionary.dwOrder = function(order,query){

	switch(order) {
		case '68656c70':
			return orders.help(query);
			break;
		default:
			console.log('no this order');
	}
}