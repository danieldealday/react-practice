import React, { Fragment } from 'react';
import Person from './Person.js';

const Family = (props) => (
  <Fragment>
    <h2>Here is a Family Component</h2>
    <Person />
    <Person />
  </Fragment>
)

export default Family;