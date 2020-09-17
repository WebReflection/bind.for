require('../cjs');

const context = {};
console.assert(method.for(context) === method.for(context), 'unexpected duplicated method');
console.assert(method.for(global) === method.for(global), 'unexpected duplicated method');
console.assert(method.for(context)() === context, 'unexpected return');

delete require.cache[require.resolve('../cjs')];

require('../cjs');

function method() {
  return this;
}
