import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Harder from '../components/Harder';
import Better from '../components/Better';

export default class Contacts extends Component {

  render () {
    // deconstruction of props to pass to Routes
    let {match} = this.props;
    // log to show `match` object: params, url, path
    console.log(match);
    return (
      <Fragment>
        <h1>Contacts</h1>
        <Link to={`${match.url}/harder`}><button>Harder</button></Link>
        <Link to={`${match.url}/better`}><button>Better</button></Link>
        <Route path={`${match.url}/harder`} component={Harder} />
        <Route path={`${match.url}/better`} component={Better} />
      </Fragment>
    )
  }
}