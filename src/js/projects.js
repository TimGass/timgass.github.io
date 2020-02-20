import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

class Projects extends Component {
  render() {
    let page;
    let bottomImages;
    let topImage;
    const project = this.props.projects.find(({ id }) => id === this.props.match.params.id);
    if (!project && this.props.match.params) {
      page = (<Redirect exact to='/portfolio' />);
    }
    else {
      const images = project.images.map((image, index) => {
        if(index === 0 && project.images.length > 1) {
          return <img src={image.src} className={`${project.name} topImage`} key={index}/>;
        }
        return (<a href={image.link} key={index}>
          <img src={image.src} />
          <div className={`descriptionText descriptionText-${index+1} ${project.name}`}>
            <h3>{image.description}</h3>
          </div>
        </a>);
      });
      if (images.length > 1){
        bottomImages = images.slice(1);
        topImage = images[0];
      }
      else {
        bottomImages = images;
        topImage = null;
      }
      page = (
        <div id={project.id}>
          <div id='about'>
            {topImage}
            <h1>
              {project.name}
            </h1>
            <p>
              {project.body}
            </p>
            <a href={project.code} id='code' >
              <div alt='Picture of the GitHub OctoCat.' id='codeImage' />
              <p>Check out the code!</p>
            </a>
            {bottomImages}
            <Link to='/portfolio#projects' id='back'>Back to Portfolio</Link>
          </div>
        </div>);
    }
    return (
      <div id="projectsPage">
        {page}
      </div>);
  }
}

Projects.propTypes = {
  match: PropTypes.object,
  projects: PropTypes.array,
};

export default Projects;