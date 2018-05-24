# ContextAPI advantages
- `props drillin` or passing `props` through multiple components is repetitive and unintuitive
- `context` allows for information to directly be inject into component without concern of tracking through many layers of JavaScript files

# ContextAPI Comparison against Redux
- `context` allows for information to be passed directly through render props; this difference
- much like the `store` from Redux, the ContextAPI uses `context` to pass state information directly
- unfortunately, the ContextAPI does not support `reducers` and `dispatchers` as Redux has built-in, however it does imitate `subscribers` since it passes information directly to components
- a subscription-based state to be passed down is still needed to be found implemented in a good manner