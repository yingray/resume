import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDymabT-_-RvAnnOk8k3igLfMH0KIsXAaY',
  authDomain: 'resume-86d3f.firebaseapp.com',
  databaseURL: 'https://resume-86d3f.firebaseio.com',
  projectId: 'resume-86d3f',
  storageBucket: 'resume-86d3f.appspot.com',
  messagingSenderId: '500784285774'
}

const fb = firebase.initializeApp(config).database().ref()

fb.on('value', snapshot => {
  const store = snapshot.val()
  ReactDOM.render(<App {...store} />, document.getElementById('root'))
  registerServiceWorker()
})
