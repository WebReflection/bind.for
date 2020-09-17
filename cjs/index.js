'use strict';
const {defineProperty, key, value} = require('./value.js');

if (!(key in defineProperty))
  defineProperty(Function.prototype, key, {value});
