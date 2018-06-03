import React, { Component } from 'react';
import Context from './Context.js';
import reducers from './reducers.js';
class Provider extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }

  actions = reducers.map( e => e);

  // actions = {
  //   goSuper: () => {
  //     this.setState({
  //       name: 'Super Saiyajin Daniel'
  //     });
  //     console.log(this.state.name);
  //   }
  // }

  render () {
    return (
      <Context.Provider value={{state: this.state, actions: this.actions}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider;