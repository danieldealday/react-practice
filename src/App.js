import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Daniel',
    energy: 9000,
    cool: true
  }
  render () {
    return (
      <MyContext.Provider value={{state: this.state}}>
        {this.props.children}
      </ MyContext.Provider>
    )
  }
}

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

const Family = (props) => (
  <Fragment>
    <p>Here is a Family Component</p>
    <Person />
    <Person />
  </Fragment>
)

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

// a stateless functional component
const StatelessFunctionalComponent = (props) => (
  <div>
    <p> I'm a stateless functional component </p>
  </div>
)

export default App;
