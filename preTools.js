var a = module.exports = {
  Date: {
    timeStamp: function() {
      let date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth(),
        d = date.getDate(),
        h = date.getHours(),
        min = date.getMinutes();

      let dateResult = "";

      dateResult += y;
      dateResult += m;
      dateResult += d;
      dateResult += h;
      dateResult += min;

      let random = Math.random() * 1000;

      random = parseInt(random);
      
      dateResult += random;

      return dateResult;
    }
  }
};