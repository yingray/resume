import React from 'react'
import _ from 'lodash'

const Skills = props => {
  const { description, icon } = props
  return (
    <div>
      {_.map(description, element =>
        <span>
          <i className="material-icons">{icon}</i> {element}&nbsp;&nbsp;
        </span>
      )}
    </div>
  )
}

export default Skills
