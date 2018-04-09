import React, { Component, Fragment } from 'react';
import Provider from './Provider.js';
import Family from './Family.js';

class App extends Component {
  render() {
    return (
      <Provider>
        <p>I'm the App</p>
        <Family />
      </Provider>
    );
  }
}

export default App;