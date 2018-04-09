import React, { Component, createContext, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const Context = createContext('context');

class App extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }
  render() {
    return (
      <Fragment>
        <p>I'm the App</p>
        <Family name={this.state.name}/>
      </Fragment>
    );
  }
}

const Family = (props) => (
  <Fragment>
    <p>Here is a Family Component</p>
    <Person name={props.name}/>
    <Person name={props.name}/>
  </Fragment>
)

class Person extends Component {
  render () {
    return (
      <Fragment>
        <p>I'm a Person, {this.props.name}.</p>
      </Fragment>
    )
  }
}

// a stateless functional component
const StatelessFunctionalComponent = (props) => (
  <div>
    <p> I'm a stateless functional component </p>
  </div>
)

export default App;
