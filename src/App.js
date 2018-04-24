import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import List from './views/List';
import Calendar from './views/Calendar';
import Contacts from './views/Contacts';
import Home from './views/Home';


export default class App extends Component {
  let = {
    username: 'daniel',
    password: '1234'
  }
  render() {
    return (
        <Router>
          <Fragment>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/contacts" component={Contacts} />
          </Fragment>
        </Router>
    )
  }
}
