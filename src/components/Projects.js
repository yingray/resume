import React from 'react'
import _ from 'lodash'

const Projects = props => {
  return ( 
    <div>
      <h2>Projects</h2>
      {_.map(props, project => {
        return <div className="c-project__card">
        <h3 className="c-project__title">
          {project.name}
        </h3>
        <p className="c-project__date">
          {project.date}
        </p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.link}
        </a>
        <p>
          {project.description}
        </p>
      </div>
      })}
      
    </div>
  )
}

export default Projects
