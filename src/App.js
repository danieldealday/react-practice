import React, { Component } from 'react';
import Provider from './Provider.js';
import Family from './Family.js';

class App extends Component {
  render() {
    return (
      <Provider>
        <h1>I'm the App</h1>
        <Family />
      </Provider>
    );
  }
}

export default App;