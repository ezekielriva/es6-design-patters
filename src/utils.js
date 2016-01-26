var _ = (function () {
  return {
    extends :function (src, obj) {
      Object.getOwnPropertyNames(obj).forEach(function(propName) {
        if (typeof obj[propName] === "object") {
          src[propName] = _.extends(obj, propName);
        } else {
          src[propName] = obj[propName];
        }
      });

      return src;
    },

    DefaultException :function (message) {
      this.message = message;
      console.log(this);
    },

    NotDefinedMethod :function (message) {
      this.name = "NotDefinedMethod";
      _.DefaultException.call(this, message);
      return this;
    }
  }
})();

module.exports = _;
