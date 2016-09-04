var eaves = require('./eaves');
var reqwest = require('reqwest');
var markdown = require('markdown').markdown;

var Blog = module.exports = {};

Blog.message = {
    title: '',
    txt: '',
    author: '',
    time: '',
    keys: '',
    cloumn: ''
}

Blog.Sync = function(a, b) {
    this.update = function() {
        b.innerHTML = markdown.toHTML(a.value);
        
        Blog.message.title = document.getElementById('blog-title').value;
        Blog.message.txt = b.innerHTML;
        Blog.time = new Date();
        Blog.clomun = document.getElementById('blog-cloumn').value;
        Blog.keys = document.getElementById('blog-keys').value;
    };
    a.editor = this;
    this.update();
};

Blog.save = function() {
	reqwest({
		url:'article/save',
		method:'POST',
		data:Blog.message,
		error:function(e){
			console.log(e);
		},
		success:function(data){
			console.log(data)
		}
	});
}

Blog.push = function(text) {
    console.log(Blog.txt, 'push');
}

Blog.clear = function(text) {
    console.log(Blog.txt, 'clear');
}