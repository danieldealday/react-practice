import React, { Component, Fragment } from 'react';

class Pooponent extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.header}</h1>
        <p></p> 
      </Fragment>
    );
  }
}

export default Pooponent;