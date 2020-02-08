import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../assets/PublicResume.pdf';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <NavLink to="/Portfolio" activeClassName="active">
          Portfolio
        </NavLink>
        <NavLink to="/Skills" activeClassName="active">
          Skills
        </NavLink>
        <NavLink to="/About" activeClassName="active">
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
