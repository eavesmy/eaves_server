var React = require('react');
var ReactDOM = require('react-dom');

var UserPublish = require('./UserPublish');

window.onload = function(){
	ReactDOM.render(<UserPublish />,document.getElementById('userpublish'));
};
