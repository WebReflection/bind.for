const bindFor = require('../cjs/pony');

const context = {};
const fn = bindFor(function () { return this; });

console.assert(fn.for(context) === fn.for(context), 'unexpected duplicated method');
console.assert(fn.for(context)() === context, 'unexpected return');

require('../cjs');

console.assert(method.for(context) === method.for(context), 'unexpected duplicated method');
console.assert(method.for(global) === method.for(global), 'unexpected duplicated method');
console.assert(method.for(context)() === context, 'unexpected return');

delete require.cache[require.resolve('../cjs')];

require('../cjs');

function method() {
  return this;
}
