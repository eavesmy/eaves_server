var $ = require('jquery');
var Animate = require('./animate.js');


$(function(){
	console.log('Welcome');

	$('#nav-btn').on('click',Animate.toggle('Nav-down','Nav-up','nav'));
	$('.main-bar label span').on('click',Animate.toggle('Bar-right','Bar-left'));
});