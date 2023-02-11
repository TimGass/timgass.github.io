import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { withContentRect } from 'react-measure';
import { useParams } from 'react-router-dom';

import arrow from '../assets/down.png';

import Header from './header';
import Footer from './footer';
import Projects from './projects';
import Portfolio from './portfolio';
import projectList from './projectList';


function PortfolioPage(props) {
  const { id } = useParams();

  return (
    <div id="portfolioPage" className="pageDiv" ref={props.measureRef}>
      <div className="scrollbarTrack">
        <div className="scrollbarThumb" />
      </div>
      <div className="hero-overlay">
        <div className="hero">
          <Header />
          <h1 className="title">Portfolio</h1>
          <Link
            to={id?`#about`:`#projects`}
            className="descriptionLink"
          >
            <img src={arrow} className="arrow-down" />
          </Link>
        </div>
      </div>
        {id?<Projects id={id} projects={projectList} />:<Portfolio />}
      <Footer />
    </div>
  );
}

export default withContentRect('bounds')(PortfolioPage);
