import React from 'react';
import { ReactComponent as ProfileIcon } from './icons/profile.svg';

function Header(props) {
  return (
    <Navbar>
      <NavItem icon={<ProfileIcon/>} />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  return(
    <li className="nav-item">
      <a href="#" className="icon-button">{props.icon}</a>
    </li>
  );
}

export default Header;
