import React, { Component, Fragment } from 'react';

class App extends Component {
  state = {
    name: 'Daniel',
    age: 32,
    cool: true
  }
  render() {
    return (
      <Fragment>
        <p>Hello World</p>
      </Fragment>
    );
  }
}

export default App;