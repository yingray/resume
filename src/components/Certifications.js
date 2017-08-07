import React from 'react'
import _ from 'lodash'

const Certifications = props => {
  const { description, icon } = props
  return (
    <div>
      {_.map(description, element =>
        <p>
          <i className="material-icons">{icon}</i> {element}
        </p>
      )}
    </div>
  )
}

export default Certifications