import React from 'react'
import _ from 'lodash'

const Skills = props => {
  return (
    <div>
      {_.map(props, element =>
        <p>
          <i className="material-icons">flare</i> {element}
        </p>
      )}
    </div>
  )
}

export default Skills
