exports.toggle = function(a,b,c){
	var foo = function(){
		var el,_class;
		if(typeof c === 'string'){
			el = document.getElementById(c);
		}else if(c === null || c === 'undefined' || c === undefined){
			el = this.parentNode;
		}else if(typeof c === 'object'){
			el = c;
		}
		_class = el.getAttribute('class');
		(_class === null || _class.indexOf(a) !== 0)?el.setAttribute('class',a):el.setAttribute('class',b);
	}
	return foo
}