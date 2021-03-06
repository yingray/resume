import React, { Component } from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

class App extends Component {
  render() {
    const { data: { profile: { email, github, linkedin, description }, name, experience, education, skills } } = this.props
    return (
      <main className="App">
        <h1>
          {name}
        </h1>
        <p>
          <i className="material-icons">email</i> {email}
          <br />
          <i className="material-icons">web</i> <a href={github} target="_blank">{github}</a>
          <br />
          <i className="material-icons">person</i> <a href={linkedin} target="_blank">{linkedin}</a>
           
        </p>
        <hr />
        <h2>Profile</h2>
        <p>
          {description}
        </p>
        <hr />
        <h2>Experience</h2>
        {experience.map(element => <Experience {...element} />)}
        <hr />
        <h2>Education</h2>
        {education.map(element => <Education {...element} />)}
        <hr />
        <h2>Skills</h2>
        <Skills {...skills} />
      </main>
    )
  }
}

export default App
