var codeOrder = require('./codeOrder');

exports.render = function(req, res) {
    res.render('eaves-terminal', {
        _privite: 'editor'
    });
};

exports.code = function(req, res) {
    var resSend = function(status,info){
        (status === 404)?(info = 'Sorry,we dont know what you input..'):(true);
        var _data = {
            _status:status,
            _info:info
        };
        res.send(_data);
    };

    var code = req.body._code,
        query = req.body._query;
    codeOrder.doing(code,query,function(result){
        if(result === undefined){
            return resSend(404)
        }
        res.send(200,result);
    });
};