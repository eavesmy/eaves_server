var $ = require('./func/eaves');
var blog = require('./func/blog');

window.onload = function(){

/*	blog.message.author = 'editor';
	var inputArea = $('#blog-write');
	var showArea = $('#blog-show');

	new blog.Sync(inputArea,showArea);
	
	var btnSave = $('#blog-btn-save');
	btnSave.on('click',blog.save);

	var btnPush = $('#blog-btn-push');
	btnPush.on('click',blog.push);

	var btnClear = $('#blog-btn-clear');
	btnClear.on('click',blog.clear);*/

	var barBtn = $("#barBtn");
	barBtn.animation({top:10+'vh'})
}