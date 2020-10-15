import React from 'react';
import './header.css'
import logo from '../../logo.svg';

import { Link, NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className="header">
    <Link to={'/'}>
      <img
        src={ logo }
        alt="Logo Space X"
        className="logo"
      />
    </Link>
    <nav className="main-nav nav">
      <ul className="list">
        { props.rockets.map((item, idx) => (
          <li key={ idx } className="item">
            <Link
              to={ '/rocket' }
              onClick={ () => {
                props.changeRocket(item);
              } }
              className="item-link"
            >
              { item }
            </Link>
          </li>
        )) }
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <NavLink exact activeClassName={'active'} to={'/'} className="item-link">Home</NavLink>
        </li>
        <li className="item">
          <NavLink activeClassName={'active'} to={'/calendar'} className="item-link">Calendar</NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;
