var dbMgr = require('./dbMgr');

var containMgr = module.exports = {
  _list: [],

  checkDefaultList: function() {
    if (!this._list.length) return this.getHomePages();
  },

  getHomePages: function() {
    dbMgr.insert("article", "view", {

      designName: "_articles",
      viewName: "articleList"

    }, function(articleList) {

      if (!articleList) return;


      var i = 0,
        opt;
      for (; i < 20; i++) {

        if (containMgr._list.length >= 20) return;

        opt = articleList.rows[0];

        containMgr._list.push(opt.value);
      }
    });
  }
};