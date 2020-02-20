import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../assets/Resume.pdf';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <NavLink to="/portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/skills" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          Resume
        </a>
        <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
          Email
        </a>
      </footer>
    );
  }
}

export default Footer;
