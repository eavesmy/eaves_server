var pluginAdd = require('./pluginAdd');
var netMgr = require('./netMgr');
//var vuePlugin = require('./plugin');

module.exports = {
  home: {
    plugin: "plugin-home",
    default:(dom)=>{
      pluginAdd(dom);
    },
    render:function(article){

    }
  },
  help: {
    plugin: "plugin-help",
  },
  blog: {
    plugin: "plugin-blog",
    default: (dom) => {
      console.log("Open blog page");
    },
    args: {
      "-e": (dom) => {
        pluginAdd(dom);
      },
      "-c": (dom) => {
        var obj_input = dom.getElementsByTagName("input");

        var obj_textarea = dom.getElementsByTagName("textarea");

        var obj_targetInput = Object.assign(obj_input, obj_textarea);

        var obj_keys = Object.keys(obj_targetInput);

        var len = obj_keys.length;

        for (var i = 0; i < len; i++) {
          var _key = obj_keys[i];

          var opt = obj_targetInput[_key];

          opt.value = "";
        }
      },
      "-p": (dom) => {

        var article = {
          title: document.getElementById("blog-title").value,
          contain: document.getElementById("blog-text").value,
          tags: document.getElementById("blog-tags").value
        };

        var blogStr = new FormData();
        blogStr.append("json", JSON.stringify(article));

        var status = netMgr.post(config.path.blog.publish,JSON.stringify(article));

        if(!!status.err) console.log("Fetch failed");

      },
      "-s": (dom) => {},
      "-o": (dom) => {},
      "-t": (dom) => {},
      "-d": (dom) => {},
      "-h": (dom) => {},
      "-v": (dom) => {}
    }
  }
};