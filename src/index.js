import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import firebase from 'firebase'

import { firebaseConfig } from './constants/firebase'

const fb = firebase.initializeApp(firebaseConfig).database().ref()

fb.on('value', snapshot => {
  const store = snapshot.val()
  ReactDOM.render(<App {...store} />, document.getElementById('root'))
  registerServiceWorker()
})
