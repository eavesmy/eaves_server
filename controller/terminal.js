var tools = require('../tools');

exports.render = function(req,res){
    res.render('eaves-terminal',{
        _privite:tools._info
    });
};