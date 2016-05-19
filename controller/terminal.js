var tools = require('../tools');
var Code = require('./terminal-code');
var API = require('../api-routes');

exports.render = function(req, res) {
    res.render('eaves-terminal', {
        _privite: tools._info
    });
};
exports.code = function(req, res) {
    var CodeRes = function(status, info) {
            (status === 404) ? (info = ' 您的指令不对哦～') : (true);
            var main = {
                _info: info,
                _status: status
            };
            return res.send(main);
        },
        code = req.body._code,
        query = req.body._query;
        Code(code,query,CodeRes);
};

/*
exports.code = function(req,res){
    var CodeRes = function(status,info){
        (status === 404)?(info=' 您的指令不对哦～'):(true);
        var main = {
            _info:info,
            _status:status
        };
        return res.send(main);
    }, FindOrder = function(code,query,callback){
        (!Code[code])?(CodeRes(404)):(callback(code,query));
    }, FindQuery = function(code,query){
        if (query.length === 1 && query[0] ===''){
            query = 0;
        }
        var i;
        for(i = 0;i<query.length;i++){
            if(!Code[code].query[query[i]]||Code[code].query[query[i]]===undefined){
                return CodeRes(404)
            }
        }
        RunCode(code,query);
    },RunCode = function(code,query){
        API.run(code,query,function(body){
           CodeRes(200,body.run);
        });
    };
    FindOrder(req.body._code,req.body._query.split(','),FindQuery);
};*/