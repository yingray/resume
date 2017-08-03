import React from 'react'

const Experience = props => {
  const { job, company, jobFrom, jobTo, description, location } = props
  return (
    <div>
      <h3>
        {job} | {company} | {location} | {jobFrom} - {jobTo}
      </h3>
      <p>
        {description.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default Experience
