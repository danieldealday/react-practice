import React, { Component, Fragment } from 'react';
import Context from './Context.js';
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

class Person extends Component {
  render () {
    return (
      // sibling components cannot be added and the render functions must be used to pass context information
      <MyContext.Consumer>
        {(context) => (
          <Fragment>
            <p>
            I'm inside the Consumer - Name: {context.state.name}
          </p>
          <p>
            I'm inside the Consumer - Energy: {context.state.energy}
          </p>
          </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}

export default App;
