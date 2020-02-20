import React, { Component } from 'react';
import { Route, Switch, matchPath, Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure';

import Header from './header';
import Footer from './footer';
import Projects from './projects';
import Portfolio from './portfolio';
import arrow from '../assets/down.png';
import parkALotAPI from '../assets/park-a-lot-capture.png';
import parkALot from '../assets/Park-A-Lot.png';
import team from '../assets/team.png';
import chronophobiaMain from '../assets/ChronophobiaMain.png';
import chronophobiaAbout from '../assets/ChronophobiaAbout.png';
import Acquali from '../assets/Acquali.png';
import GoalsMain from '../assets/GoalsMain.png';
import GoalsAbout from '../assets/GoalsAbout.png';
import GitHubMain from '../assets/github-recreation.png';
import GitHubAbout from '../assets/GitHubAbout.png';
import PowellPeraltaMain from '../assets/PowellPeralta.png';
import PowellPeraltaAbout from '../assets/PowellPeraltaAbout.png';

const projectsList = [
  {
    name: 'Park-A-Lot',
    id: 'park-a-lot',
    body: [
      'Park-A-Lot is an application developed at HackMT 2020 over 36 hours and is in ongoing development; there it received the award of third place. ',
      'Its current purpose is to use video feeds with OpenCV and Python to track cars as they enter parking lots and update both web and phone ',
      'users of the space remaining in the lots. The back-end is built in Node, Express, Mongo, and Socket.io with Swagger API Docs and Mongoose integration. ',
      'The API server has full token-based authentication. The front-end web application is built in React with Socket.io client integration. ',
      'The Front-End page may need to be refreshed to load as the server host is designed to sleep when inactive.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: team },
      {
        src: parkALot,
        link: 'https://park-a-lot.netlify.com/',
        description: 'Front-End Application',
      },
      {
        src: parkALotAPI,
        link: 'https://park-a-lot.herokuapp.com/api-explorer/',
        description: 'Back-End API',
      },
    ],
    code: 'https://github.com/Car-Hacked',
  },
  {
    name: 'Chronophobia',
    id: 'chronophobia',
    body: [
      'Chronophobia is a time-efficiency tracking application. I designed it to help people, like myself, really track what they are doing with their time to be more ',
      'efficient with their time expenditures. After all, all we have in life is time. The back-end API itself is built in Node, MongoDB, with SwaggerUI and Swagger Docs.',
      'The front-end has yet to be developed, as I am still working on my mobile applications development platforms.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: chronophobiaMain },
      {
        src: chronophobiaAbout,
        link: 'https://chronophobia.herokuapp.com/',
        description: 'Chronophobia API',
      },
    ],
    code: 'https://github.com/TimGass/chronophobia',
  },
  {
    name: 'Acquali Wordcloud Web Tool',
    id: 'acquali',
    body: [
      'Acquali is an online marketing company. They reached out to me and wanted a front-end web-designed application for use with their back-end servers to type in multiple urls ',
      'to search the most commonly used words with various pages to perform web-based marketing research. The front-end web tool is built in React. It is a simple and effective ',
      'demonstration of basic web-design principles and string-parsing.',
    ].reduce((whole, item) => whole + item),
    images: [
      {
        src: Acquali,
        link: 'https://timgass.github.io/acquali-wordcloud',
        description: 'Acquali Wordcloud Web Tool',
      },
    ],
    code: 'https://github.com/TimGass/acquali-wordcloud',
  },
  {
    name: 'Goals',
    id: 'goals',
    body: [
      'Goals is the final project of a three-person team at The Iron Yard Programming Bootcamp in Nashville, TN. Its purpose is to connect people together in order to use social ',
      'networking as a form of accountability for achieving personal goals. The front-end is a single-page application written in React with React Router. The back-end is written in Ruby ',
      'with a PostgreSQL database.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: GoalsMain },
      {
        src: GoalsAbout,
        link: 'https://jaserader.github.io/week10_finalproject_goals/',
        description: 'Goals Website',
      },
    ],
    code: 'https://github.com/jaserader/week10_finalproject_goals',
  },
  {
    name: 'Github Recreation',
    id: 'github-recreation',
    body: [
      'This project was a part of the curriculum at The Iron Yard Programming Bootcamp in Nashville, TN. It is a simple, yet effective, recreation of the Github Repo page, as it was styled, ',
      "at that time, built in React, with JQuery. It makes AJAX requests to the GitHub API to display the repos of my personal GitHub page, as they are updated in GitHub's database, with links ",
      'to each of the repos.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: GitHubMain },
      {
        src: GitHubAbout,
        link: 'https://timgass.github.io/homework_week7_tue/',
        description: 'GitHub Recreation',
      },
    ],
    code: 'https://github.com/TimGass/homework_week7_tue',
  },
  {
    name: 'Powell-Peralta Recration',
    id: 'powell-peralta-recreation',
    body: [
      'This project is a simple recreation of the Powell-Peralta homepage, at the time of its creation. This was one of my first programming assignments, ever, at the Iron Yard Programming Bootcamp ',
      'in Nashville, TN. The website is made in vanilla JavaScript, HTML, and CSS. It\'s a great example of how far my programming skills have come, since the beginning of my journey.',
    ].reduce((whole, item) => whole + item),
    images: [
      { src: PowellPeraltaMain },
      {
        src: PowellPeraltaAbout,
        link: 'https://timgass.github.io/homework_week2_weekend/',
        description: 'Powell-Peralta Recreation',
      },
    ],
    code: 'https://github.com/TimGass/homework_week2_weekend',
  },
];

const getParams = pathname => {
  const matchProfile = matchPath(pathname, {
    path: `/portfolio/:id`,
  });
  return (matchProfile && matchProfile.params) || { exact: true };
};


class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'projects'
    }
  }
  componentDidMount() {
    const { pathname } = this.props.location;
    const currentParams = getParams(pathname);
    if (currentParams.id) {
      this.setState({
        id: 'about'
      })
    }
  }
  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    const { pathname: prevPathname } = prevProps.location;

    const currentParams = getParams(pathname);
    const prevParams = getParams(prevPathname);

    if (currentParams.id && currentParams.id !== prevParams.id) {
      this.setState({
        id: 'about'
      })
    }
    else if(currentParams.exact && currentParams.exact !== prevParams.exact){
      this.setState({
        id: 'projects'
      });
    }
  }
  render() {
    return (
      <div id="portfolioPage" className="pageDiv" ref={this.props.measureRef}>
        <div className="scrollbarTrack">
          <div className="scrollbarThumb" />
        </div>
        <div className="hero-overlay">
          <div className="hero">
            <Header />
            <h1 className="title">Portfolio</h1>
            <Link
              to={`#${this.state.id}`}
              className="descriptionLink"
              key={this.props.location}
            >
              <img src={arrow} className="arrow-down" />
            </Link>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path={`${this.props.match.path}`}
            render={props => (
              <Portfolio
                match={this.props.match}
              />
            )}
          />
          <Route
            path={`${this.props.match.path}/:id`}
            render={props => (
              <Projects
                projects={projectsList}
                {...props}
              />
            )}
          />
          <Redirect from="*" exact to="/portfolio" Component={PortfolioPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

PortfolioPage.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  measureRef: PropTypes.func
}

export default withContentRect('bounds')(PortfolioPage);
