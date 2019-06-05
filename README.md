# mask-exit

Few npm packages use `process.exit` for unknown reasons.

If you want to ignore these unreasonable exits, apply the code below.

# Usage
```js
require('mask-exit')(['foo', 'bar'])
```

It’s important that the `mask-exit` is required before you require any other modules in your application.

> Absolutely, a better choice is to not use these packages.
