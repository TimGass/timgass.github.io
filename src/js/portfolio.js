import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import arrows from '../assets/double-down.png';
import Header from './header';
import Footer from './footer';

class Portfolio extends Component {
  render() {
    return (
      <div id="portfolioPage" className="pageDiv">
        <div className="scrollbarTrack">
          <div className="scrollbarThumb" />
        </div>
        <div className="hero-overlay">
          <div className="hero">
            <Header />
            <h1 className="title">Portfolio</h1>
            <Link to="#list" className="descriptionLink">
              <img src={arrows} className="arrow-down" />
            </Link>
          </div>
        </div>
        <div className="content">
          <ul id="list">
            <li>
              <a href="https://car-hacked.netlify.com/">
                <img
                  id="park"
                  rel="A picture of the web API known as Park-A-Lot."
                />
                <div className="project-description">
                  <h3>Park-A-Lot</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://chronophobia.herokuapp.com">
                <img
                  id="chronophobia"
                  rel="A picture of the web API known as chronophobia."
                />
                <div className="project-description">
                  <h3>Chronophobia</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://timgass.github.io/acquali-wordcloud">
                <img
                  id="acquali"
                  rel="A picture of the front-end of a webtool known as the Acquali wordcloud tool."
                />
                <div className="project-description">
                  <h3>Acquali</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://jaserader.github.io/week10_finalproject_goals/">
                <img
                  id="goals"
                  rel="A picture of the Goals splash page, with a soccer goal."
                />
                <div className="project-description">
                  <h3>Goals</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://timgass.github.io/homework_week7_tue/">
                <img
                  id="github"
                  rel="A picture of a recreation of TimGass' GitHub Repo page."
                />
                <div className="project-description">
                  <h3>Github Recreation</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://timgass.github.io/homework_week2_weekend/">
                <img
                  id="powell"
                  rel="A picture of a Powell-Peralta splash page recreation, with skaters and skateboarders, and custom skull logo"
                />
                <div className="project-description">
                  <h3>Powell-Peralta Recreation</h3>
                  <p>View Project</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
