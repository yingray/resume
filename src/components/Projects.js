import React from 'react'
import _ from 'lodash'

const Projects = props => {
  return ( 
    <div>
      <h2>Projects</h2>
      {_.map(props, project => {
        return <div className="c-project__card">
        <h3 className="c-project__title">
          PAWEES 2017 International Conference Registration System (Node.js)
        </h3>
        <p className="c-project__date">
          
        </p>
        <a href="https://pawees.info" target="_blank">
          https://pawees.info
        </a>
        <p>
          Jabong is an online social networking service which was launched on April 1, 2016 in
          Taipei Tech Extension, School of Continuing Eduction. The web client side design used
          bootstrap, javascript, j-query. In order to display friends-food-map, using the third
          party API such as Google Places API. The server side used Java servlet, Maven project,
          DAO, MVC structure design, Tomcat Apache, MySQL database.
        </p>
      </div>
      })}
      
    </div>
  )
}

export default Projects
