'use strict';
const {defineProperty} = Object;

const key = 'for';

exports.defineProperty = defineProperty;
exports.key = key;
exports.value = value;

function value(context) {
  const _ = new WeakMap;
  const value = context => _.get(context) || set(context);
  const set = context => {
    const method = this.bind(context);
    _.set(context, method);
    return method;
  };
  defineProperty(this, key, {value});
  return set(context);
}
