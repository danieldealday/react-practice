import React, { Component, Fragment } from 'react';
import Provider from './Provider.js';
import Family from './Family.js';

class App extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }
  render() {
    return (
      <Provider>
        <p>I'm the App</p>
        <Family/>
      </Provider>
    );
  }
}

export default App;