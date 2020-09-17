import {defineProperty, key, value} from './value.js';

export default method => defineProperty(method, key, {
  configurable: true,
  value
});
