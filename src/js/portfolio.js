import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';


function Portfolio() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div id="projects">
      <ul>
        <li>
          <Link to={`${pathname}/park-a-lot#about`}>
            <img
              id="park"
              rel="A picture of the web API known as Park-A-Lot."
            />
            <div className="project-description">
              <h3>Park-A-Lot</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`${pathname}/chronophobia#about`}>
            <img
              id="chronophobia"
              rel="A picture of the web API known as chronophobia."
            />
            <div className="project-description">
              <h3>Chronophobia</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`${pathname}/acquali#about`}>
            <img
              id="acquali"
              rel="A picture of the front-end of a webtool known as the Acquali wordcloud tool."
            />
            <div className="project-description">
              <h3>Acquali</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`${pathname}/goals#about`}>
            <img
              id="goals"
              rel="A picture of the Goals splash page, with a soccer goal."
            />
            <div className="project-description">
              <h3>Goals</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`${pathname}/github-recreation#about`}>
            <img
              id="github"
              rel="A picture of a recreation of TimGass' GitHub Repo page."
            />
            <div className="project-description">
              <h3>Github Recreation</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to={`${pathname}/powell-peralta-recreation#about`}>
            <img
              id="powell"
              rel="A picture of a Powell-Peralta splash page recreation, with skaters and skateboarders, and custom skull logo"
            />
            <div className="project-description">
              <h3>Powell-Peralta Recreation</h3>
              <p>View Project</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;