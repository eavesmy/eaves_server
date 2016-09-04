var eaves = require('./eaves');


var Blog = module.exports = {};

Blog.sync = function(a, b) {
    a.on('keyup', function() {
        b.innerHTML = a.value;
    });
};

Blog.save = function(){
	console.log('save');
}

Blog.push = function(){
	console.log('push');
}

Blog.clear = function(){
	console.log('clear');
}