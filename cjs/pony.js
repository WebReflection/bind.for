'use strict';
const {defineProperty, key, value} = require('./value.js');

module.exports = method => defineProperty(method, key, {
  configurable: true,
  value
});
