import React, { Component, Fragment } from 'react';
import Context from './Context.js';

export default class Person extends Component {
  render () {
    return (
      // sibling components cannot be added and the render functions must be used to pass context information
      <Context.Consumer>
        {({state, actions}) => (
          <Fragment>
            <p>
             I'm inside the Consumer - Name: {state.name}
            </p>
             <p>
               I'm inside the Consumer - Energy: {state.energy}
            </p>
            <button onClick={actions.goSuper}>Talk</button>
          </Fragment>
        )}
      </Context.Consumer>
    )
  }
}
