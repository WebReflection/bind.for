# bind.for

[![Build Status](https://travis-ci.com/WebReflection/bind.for.svg?branch=master)](https://travis-ci.com/WebReflection/bind.for) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/bind.for/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/bind.for?branch=master)

A lazy `Function.prototype.for(context)` bind helper.

This is an alternative take at the same problem [bound-once](https://github.com/WebReflection/bound-once#readme) would like to solve, except this should perform better for the following reasons:

  * the `WeakMap` is lazily created once per each _method_
  * because it's usually the _method_ that binds multiple contexts, and not the other way around, this approach requires less moving parts
  * _bound-once_ looks up for the method, either as function or as a string, then it weakly refers the context to a new `Map`, if not previously referenced, then it performs a lookup via such map to return the bound method, or it stores it in there once and return. _bind.for_ here, looks up for the context right away, and it stores once the bind of itself if the content wasn't previously stored. This is one operation instead of 3.

On the other hand, developers are usually skeptical regarding globals prototype pollution, but it is worth having this module around for performance critical cases.

This could also be exposed as generic function augmentor, but that'd be boring.

```js
import 'bind.for';

const context = {};

method.for(context) === method.for(context);
method.for(context)() === context;

function method() {
  return this;
}
```
