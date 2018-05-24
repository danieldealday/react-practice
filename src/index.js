// import React from 'react'
// import { render } from 'react-dom'
// import App from './components/App'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux';

// reducer is the state handling functions that update state according to the action type that is received
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // information here will handle how state will change based on the action type received
      state = state + action.payload
      break;
    case 'SUBSTRACT':
      break;
    default:
      return state;
  }
}

// store will hold the singleton data from the application
// createStore takes 2 arguments: first is the reducer(s) and optionally the second as the react state

const store = createStore(reducer, 1);

// whenever the store is updated fire the '.subscribe()' callback
  // store.getState() is a built-in function in Redux that gives us the current state
store.subscribe(
  console.log('Store updated!', store.getState())
);

// a dispatcher take an argument that is the 'action object'
store.dispatch({
  // the associated type of action referring to the case in the reducer
  type: 'ADD',
  // name for the values related to the action
  // in this case a numerical value to change
  payload: 10
});
