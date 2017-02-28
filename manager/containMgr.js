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

      articleList.rows.forEach(function(article, index) {

        containMgr._list.push(article.value);
        if (index > 20) return;
        
      });

    });
  }
};