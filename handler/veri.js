module.exports = {
  purview: function(ctx, next) {
    //console.log("Check ctx", ctx);
    var userSignedCookie = ctx.cookies.get("user", {
      signed: true
    });

    if ( /*!*/ userSignedCookie) {
      ctx.status = 403;
      return;
    }

    next();
  }
};