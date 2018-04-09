import React, { Component, Fragment } from 'react';
import MyProvider from './MyProvider.js';
import Family from './Family.js';

class App extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }
  render() {
    return (
      <MyProvider>
        <p>I'm the App</p>
        <Family/>
      </MyProvider>
    );
  }
}

export default App;