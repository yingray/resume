import React from 'react'

const Experience = (props) => {
  const {job, company, jobFrom ,jobTo, description, location } = props
  return (<div>
    <h3>{job}, {company}; {location}; {jobFrom} - {jobTo}</h3>
        <p>
          {description}
        </p>
  </div>)
}

export default Experience