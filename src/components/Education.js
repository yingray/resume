import React from 'react'

const Education = props => {
  const { year, school, degree } = props
  return (
    <div>
      <h3>
        {degree}
      </h3>
      <p>{school} {year}</p>
    </div>
  )
}

export default Education
