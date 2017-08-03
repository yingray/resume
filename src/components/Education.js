import React from 'react'

const Education = props => {
  const { year, school, degree } = props
  return (
    <div>
      <h3>
        {school} - {degree}  {year}
      </h3>
    </div>
  )
}

export default Education
