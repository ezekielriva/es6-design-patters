module.exports._ = (function () {
  return {
    extends :function (src, obj) {
      Object.getOwnPropertyNames(obj).forEach(function(propName) {
        src[propName] = obj[propName];
      });

      return src;
    },
  }
})();
