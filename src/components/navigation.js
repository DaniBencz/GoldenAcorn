'use strict';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => (
  <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/redux">Redux</NavLink>
    <NavLink to="/states">States</NavLink>
    <NavLink to="/"></NavLink>
  </div>
);

export default Navigation;