import {defineProperty, key, value} from './value.js';

if (!(key in defineProperty))
  defineProperty(Function.prototype, key, {value});
