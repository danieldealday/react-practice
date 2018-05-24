# Redux
- a `reducer` handles incoming `actions` to appropriately handle how to change state in a `switch/case` statement
  - a `reducer` will take in the 'current' `state` and an `action`
  - based on the `action` an appropriate manipulation of `state` will performed
- a `store` contains majority of the the `Redux` functionality: `reducers`, `dispatchers`, and `subscribers`
- `dispatchers` send out an `action` object to the `store`
- `subscribers` listen to changes to the `state` in the `store` to accept new `state` from that change if appropriate