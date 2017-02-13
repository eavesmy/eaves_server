var Vue = require('vue');
//Vue.config.silent = true;

Vue.config.devtools = false;

module.exports = {
  Blog: new Vue({
    el: "#plugin-blog",
    name: "blog",
  })
};