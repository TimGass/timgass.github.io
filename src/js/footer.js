import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../assets/Resume.pdf';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <NavLink to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink to="/skills">
          Skills
        </NavLink>
        <NavLink to="/about">
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
