import React, { Component } from 'react';
import Context from './Context.js';

export default class Provider extends Component {
  state = {
    info: 'info',
    jobs: [
      {
        companyName: "Google",
        status: "active",
        interviewDate: new Date()
      },
      {
        companyName: "Space X",
        status: "inactive",
        interviewDate: new Date()
      }
    ]
  }
  render () {
    return (
      <Context.Provider value={{state: this.state}}>
        {this.props.children}
      </Context.Provider>
    )
  }
}