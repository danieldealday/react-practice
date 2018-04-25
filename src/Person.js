import React, { Component, Fragment } from 'react';
import Context from './Context.js';

export default class Person extends Component {
  render () {
    return (
      // sibling components cannot be added and the render functions must be used to pass context information
      <Context.Consumer>
        {(context) => {
          return (
            <Fragment>
              {context.state.data.map((item, index) => {
                return (
                  <Fragment>
                  <h1>{index}</h1>
                  <h2>{item.name}</h2>
                  <h2>{item.energy}</h2>
                  <h2>{item.cool}</h2>
                  </Fragment>
                )
              })}
            </Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}
