import $ from './func/eaves';
import blog from './func/blog';

window.onload = function(){
	var inputArea = $('#blog-write');
	var showArea = $('#blog-show');

	blog.sync(inputArea,showArea);

	var btn = $('#opacity-bar-btn');
	var s,end;

	btn.on('mousedown',blog.recordStartPosition);
	btn.on('mousemove',blog.recordMovePosition);
	btn.on('mouseup',blog.recordLeavePosition);
}