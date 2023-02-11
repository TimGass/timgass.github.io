import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import resume from '../assets/Resume.pdf';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerLeft">
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/skills" id="skillsLink">
            Skills
          </NavLink>
          <NavLink to="/about" id="aboutLink">
            About
          </NavLink>
        </div>
        <div className="headerRight">
          <a href="mailto: timothyagass@gmail.com?subject=Reaching Out&body=Hi,">
            Email
          </a>
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            Resume
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
