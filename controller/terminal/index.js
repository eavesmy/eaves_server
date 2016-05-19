var codeOrder = require('./codeOrder');

exports.render = function(req, res) {
    res.render('eaves-terminal', {
        _privite: 'editor'
    });
}

exports.code = function(req, res) {
    var code = req.body._code,
        query = req.body._query;
    codeOrder.doing(code,query,function(result){
    	console.log(result);
    });
}