import React, { Fragment } from 'react';
import Person from './Person.js';

const Family = (props) => (
  <Fragment>
    <p>Here is a Family Component</p>
    <Person />
    <Person />
  </Fragment>
)

export default Family;