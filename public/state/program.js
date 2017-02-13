var pluginAdd = require('./pluginAdd');
//var vuePlugin = require('./plugin');

module.exports = {
  home: {
    plugin: "plugin-home",
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
        let obj_input = dom.getElementsByTagName("input");

        let obj_textarea = dom.getElementsByTagName("textarea");

        let obj_targetInput = Object.assign(obj_input,obj_textarea);

        let obj_keys = Object.keys(obj_targetInput);

        let len = obj_keys.length;

        for(let i = 0;i<len;i++){
          let _key = obj_keys[i];

          let opt = obj_targetInput[_key];

          opt.value = "";
        }

      },
      "-p": (dom) => {
      },
      "-s": (dom) => {
      },
      "-o": (dom) => {
      },
      "-t": (dom) => {
      },
      "-d": (dom) => {
      },
      "-h": (dom) => {
      },
    }
  }
};