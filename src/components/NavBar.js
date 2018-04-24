import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render () {
    return (
      <Fragment>
        <Link to=''><button>Home</button></Link>
        <Link to='list'><button>List</button></Link>
        <Link to='calendar'><button>Calendar</button></Link>
        <Link to='contacts'><button>Contacts</button></Link>
      </Fragment>
    )
  }
}