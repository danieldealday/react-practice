import React, { Component, Fragment } from 'react';
import { MyContext } from './MyProvider.js';

export default class Person extends Component {
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
