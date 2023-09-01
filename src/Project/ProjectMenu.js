import React, { Component } from 'react'
import classNames from "classnames";
import projects from "./ProjectData";
import "../styles/projectMenu.css";

export default class ProjectMenu extends Component {
// we are taking constructor here that defines our state
constructor(props) {
    super(props);
    this.state = {
      activeProject: 1,
    };
  }
    
  handleProjectClick = (project) => {
    this.setState({
      activeProject: project,
    });
  };

// for showing the project details
  renderContent = (projects) => {
    // maping the data of project image and description
    return projects.map((project, index) => (
        // adding index+1 because array starts with 0
      <div key={index} className={`project-sub-container-${index + 1}`}>
        {/* describing tittle,image and description  */}
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>

        {/* link of projects */}
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    ));
  };

// for the option ,left side
render() {
    const { activeProject } = this.state;
    const projectItems = ["PROJECT 1", "PROJECT 2", "PROJECT 3"];

    return (
      <div className="project-menu">
        <div className="project-items-container">
            {/* mapping project and showing it after clicking */}
          {projectItems.map((item, index) => (
            <div
              key={index}
              className={classNames("project-item", {
                activeProject: activeProject === index + 1,
              })}
            //   after clicking project option changes by 1
              onClick={() => this.handleProjectClick(index + 1)}
            >
              <h2 className="title">{item}</h2>
            </div>
          ))}
        </div>
        {/* for rendering the right project */}
        <div className="project-sub-container">
          {this.renderContent([projects[activeProject]])}
        </div>
      </div>
    );
  }
}
