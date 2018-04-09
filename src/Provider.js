import React, { Component } from 'react';
import Context from './Context.js';

class Provider extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }
  render () {
    return (
      <Context.Provider value={{state: this.state}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider;