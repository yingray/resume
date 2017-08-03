import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Experience from './Experience'

class App extends Component {
  render() {
    const { data: { profile:{email}, name, experience } } = this.props
    return (
      <div className="App">
        <h1>
          {name}
        </h1>
        <p>
          <ul>
            <li>Email - {email}</li>
            <li></li>
          </ul>
        </p>
        <hr />
        <h2>Profile</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo impedit
          cupiditate voluptatum dolorum, adipisci a repudiandae obcaecati distinctio vitae facilis
          soluta maxime, ipsam molestiae est rem eaque? Non, earum.
        </p>
        <hr />
        <h2>Experience</h2>
        <Experience {...experience[0]} />
        <hr />
        <p className="App-intro">
          <p>{JSON.stringify(this.props)}</p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
