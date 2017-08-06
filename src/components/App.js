import React, { Component } from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'
import Projects from './Projects'

class App extends Component {
  render() {
    const {
      data: {
        avatar,
        certifications,
        profile: { email, github, linkedin, description },
        name,
        experience,
        education,
        projects,
        skills,
        icons
      }
    } = this.props
    return (
      <main className="App">
        {avatar && <img className="avatar" alt="avatar" src={avatar} />}
        <h1>
          {name}
        </h1>
        <p>
          <i className="material-icons">{icons.email}</i> {email}
          <br />
          <i className="material-icons">{icons.github}</i>{' '}
          <a href={github} target="_blank">
            {github}
          </a>
          <br />
          <i className="material-icons">{icons.linkedin}</i>{' '}
          <a href={linkedin} target="_blank">
            {linkedin}
          </a>
        </p>
        <hr />
        <h2>Profile</h2>
        <p>
          {description.split('\n').map((item, key) =>
            <span key={key}>
              {item}
              <br />
            </span>
          )}
        </p>
        <hr />
        <h2>Experience</h2>
        {experience.map(element => <Experience {...element} />)}
        <hr />
        <h2>Education</h2>
        {education.map(element => <Education {...element} />)}
        <hr />
        <h2>Skills</h2>
        <Skills description={skills} icon={icons.skillItem} />
        <hr />
        <h2>Certifications</h2>
        <Certifications description={certifications} icon={icons.cerItem} />
        <hr />
        <Projects {...projects} />
      </main>
    )
  }
}

export default App
