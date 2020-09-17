(function () {
  'use strict';

  var defineProperty = Object.defineProperty;
  var key = 'for';
  if (!(key in defineProperty)) defineProperty(Function.prototype, key, {
    value: function value(context) {
      var _this = this;

      var _ = new WeakMap();

      var value = function value(context) {
        return _.get(context) || set(context);
      };

      var set = function set(context) {
        var method = _this.bind(context);

        _.set(context, method);

        return method;
      };

      defineProperty(this, key, {
        value: value
      });
      return set(context);
    }
  });

}());
