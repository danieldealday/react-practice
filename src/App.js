import React, { Component, Fragment } from 'react';
import Pooponent from './components/Pooponent.js';

class App extends Component {
  state = {
    header: "Hi, I'm Daniel",
    age: 30,
    cool: true,
    likes: ['anime', "weightlifting", "lo-fi", "fantasy"],
    dislikes: 'sadness'
  }
    render() {
      return (
        <Fragment>
          <p>Hello World</p>
          <Pooponent thing={this.state}/>
        </Fragment>
      );
    }
}

export default App;