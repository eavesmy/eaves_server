var eaves = require('./eaves');


var Blog = module.exports = {};

var text;

Blog.sync = function(a, b) {
    a.on('keyup', function() {
        b.innerHTML = a.value;
        console.log(b.innerHTML);
    });
};

Blog.setOpacity = function(e) {

}


var mouseState = false;
Blog.recordStartPosition = function(e) {
    mouseState = true;
}
Blog.recordMovePosition = function(e) {
	
}
Blog.recordLeavePosition = function(e) {
    mouseState = false;
}